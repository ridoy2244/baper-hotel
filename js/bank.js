function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    const amountValue = inputValue.value;
    inputValue.value = '';
    return amountValue;
}
function updateTotalValue(totalValue,amountValue) {
    const depositTotal = document.getElementById(totalValue);
    const previousDeposit = depositTotal.innerText;
    
    const currentDeposit = parseFloat(previousDeposit) + parseFloat(amountValue);
    depositTotal.innerText = currentDeposit;
    
}


// deposit & widthraw

document.getElementById('deposit-btn').addEventListener('click', function () {
    
    const amountValue = getInputValue('deposit-input');

   
    updateTotalValue('deposit',amountValue);
    
    const previousBalance = document.getElementById('total-balance');
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const totalBalance = previousBalanceTotal +parseFloat(amountValue);
    previousBalance.innerText = totalBalance;
     
});

// widthraw

document.getElementById('widthraw-btn').addEventListener('click', function () {
    
    const widthrawNow = getInputValue('widthraw-input');

    updateTotalValue('widthraw', widthrawNow)

    // updateTotalValue(;

    const previousBalance = document.getElementById('total-balance');
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const endBalance = previousBalanceTotal - widthrawNow;
    previousBalance.innerText = endBalance;
   
    


    // widthrawInput.value = '';
    

})