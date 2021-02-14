// Listen for submit
document.querySelector("#loan-form").addEventListener("submit", calculateResult);

// Calculate results
function calculateResult(e) {
    // UI Variables
    const loanAmount = document.getElementById("amount");
    const interestRate = document.getElementById("interest");
    const repaymentYears = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");

    const principal = parseFloat(loanAmount.value);
    const calculatedInterest = parseFloat(interestRate.value) / 100 / 12;
    const calculatedPayments = parseFloat(repaymentYears.value) * 12;

    // Compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    } else {
        showError("Please make sure your loan details are complete");
    }

    e.preventDefault();
}

function showError(error) {
    // Create a div
    const errorDiv = document.createElement("div");

    // Get elements
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");

    // Add classes to div
    errorDiv.className = "alert alert-danger";

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

// Clear error function

function clearError() {
    document.querySelector(".alert").remove();
}