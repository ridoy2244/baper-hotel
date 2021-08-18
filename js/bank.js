function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    const amountValue = inputValue.value;
    inputValue.value = '';
    return amountValue;
}
function updateTotalValue(totalValue,amountValue) {
    const totalTaka = document.getElementById(totalValue);
    const previousValue = totalTaka.innerText;
    
    const currentValue = parseFloat(previousValue) + parseFloat(amountValue);
    totalTaka.innerText = currentValue; 
}
function total(amountValue, isadd) {
    const previousBalance = document.getElementById('total-balance');
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    if (isadd == true) {
        const totalBalance = previousBalanceTotal + parseFloat(amountValue);
        previousBalance.innerText = totalBalance;
    }
    else {
        const totalBalance = previousBalanceTotal - parseFloat(amountValue);
        previousBalance.innerText = totalBalance;
    } 
}


// deposit & widthraw

document.getElementById('deposit-btn').addEventListener('click', function () {
    const amountValue = getInputValue('deposit-input');
     updateTotalValue('deposit', amountValue); 
     total(amountValue, true);  
});

// widthraw

document.getElementById('widthraw-btn').addEventListener('click', function () {
    const widthrawNow = getInputValue('widthraw-input');
    updateTotalValue('widthraw', widthrawNow)
    total(widthrawNow, false);
})