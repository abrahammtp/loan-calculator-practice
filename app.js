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
        alert("Please make sure you have filled out all fields")
    }

    e.preventDefault();
}