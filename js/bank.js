// deposit & widthraw 

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    

    const depositTotal = document.getElementById('deposit');
    
    const previousDeposit = depositTotal.innerText;
    
    const currentDeposit = parseFloat(previousDeposit) + parseFloat(newDepositAmount);
    depositTotal.innerText = currentDeposit;
    

    const previousBalance = document.getElementById('total-balance');
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const totalBalance = previousBalanceTotal + currentDeposit;
    previousBalance.innerText = totalBalance;
    depositInput.value = '';  
});

// widthraw

document.getElementById('widthraw-btn').addEventListener('click', function () {
    const widthrawInput = document.getElementById('widthraw-input');
    const widthrawNow = widthrawInput.value;

    const previousWidthraw = document.getElementById('widthraw');
    const previousWidthrawTotal = previousWidthraw.innerText;
    const totalWidthraw = parseFloat(previousWidthrawTotal) + parseFloat(widthrawNow);
    previousWidthraw.innerText = totalWidthraw;

    const previousBalance = document.getElementById('total-balance');
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const endBalance = previousBalanceTotal - totalWidthraw;
    previousBalance.innerText = endBalance;
   
    


    widthrawInput.value = '';
    

})