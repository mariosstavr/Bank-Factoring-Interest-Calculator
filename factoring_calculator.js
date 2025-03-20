document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculate");
    
    calculateBtn.addEventListener("click", function () {
        let invoiceValue = parseFloat(document.getElementById("invoiceValue").value);
        let advanceRate = parseFloat(document.getElementById("advanceRate").value) / 100;
        let factoringFeeRate = parseFloat(document.getElementById("factoringFee").value) / 100;
        let interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
        let paymentPeriod = parseFloat(document.getElementById("paymentPeriod").value);
        
        // Calculations
        let advanceAmount = invoiceValue * advanceRate;
        let factoringFee = invoiceValue * factoringFeeRate;
        let interest = (advanceAmount * interestRate * (paymentPeriod / 360));
        let finalSettlement = invoiceValue - (advanceAmount + factoringFee + interest);
        
        // Display Results
        document.getElementById("advanceAmount").textContent = `€${advanceAmount.toFixed(2)}`;
        document.getElementById("factoringFeeAmount").textContent = `€${factoringFee.toFixed(2)}`;
        document.getElementById("interestAmount").textContent = `€${interest.toFixed(2)}`;
        document.getElementById("finalSettlement").textContent = `€${finalSettlement.toFixed(2)}`;
    });
});

console.log("JavaScript is running!");
