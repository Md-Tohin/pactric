document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositAmmout = document.getElementById('depositField').value;
    const newWithdrawAmount = parseFloat(depositAmmout);

    document.getElementById('depositField').value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number')
        return;
    }

    const totalDepositAmount = document.getElementById('totalDepositAmount');  
    const totalDeposit = totalDepositAmount.innerText;   

    totalDepositAmount.innerText = parseInt(totalDeposit) + parseInt(depositAmmout);
    document.getElementById('depositField').value = '';

    const totalBalanceAmount = document.getElementById('totalBalanceAmount');  
    const totalBalance = totalBalanceAmount.innerText;   
    totalBalanceAmount.innerText = parseInt(totalDeposit) + parseInt(depositAmmout);
});

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawAmmout = document.getElementById('withdrawField').value;
    const newWithdrawAmount = parseFloat(withdrawAmmout);

    document.getElementById('withdrawField').value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number')
        return;
    }

    const totalWithdrawAmount = document.getElementById('totalWithdrawAmount');  
    const totalWithdraw = totalWithdrawAmount.innerText;   

    const totalBalanceAmount = document.getElementById('totalBalanceAmount'); 
    const totalBalance = totalBalanceAmount.innerText; 
    const newTotalBalance = parseFloat(totalBalance); 
    
    if (newWithdrawAmount > newTotalBalance) {
        alert('Your Balanvce is low. Please check your Balance!')
        return;
    }

    totalWithdrawAmount.innerText = parseFloat(totalWithdraw) + newWithdrawAmount;
    document.getElementById('withdrawField').value = '';

    totalBalanceAmount.innerText = newTotalBalance - newWithdrawAmount;
});