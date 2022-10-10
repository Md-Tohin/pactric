
document.getElementById('btn-deposit').addEventListener('click', function(){
    const idName = 'depositField';
    const inputAmount = getInputAmount(idName);

    const totalAmountIdName = 'totalDepositAmount';
    const totalDepositAmount = totalAmount(totalAmountIdName);

    const totalBalanceAmountIdName = 'totalBalanceAmount';
    const getBalanceAmount = totalAmount(totalBalanceAmountIdName);

    setTotalAmount(totalBalanceAmountIdName, getBalanceAmount, totalAmountIdName, totalDepositAmount, inputAmount, idName);

});

