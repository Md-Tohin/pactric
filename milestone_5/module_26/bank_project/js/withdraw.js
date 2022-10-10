
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const idName = 'withdrawField';
    const inputAmount = getInputAmount(idName);

    const totalAmountIdName = 'totalWithdrawAmount';
    const totalWithdrawAmount = totalAmount(totalAmountIdName);

    const totalBalanceAmountIdName = 'totalBalanceAmount';
    const getBalanceAmount = totalAmount(totalBalanceAmountIdName);

    setTotalAmount(totalBalanceAmountIdName, getBalanceAmount, totalAmountIdName, totalWithdrawAmount, inputAmount, idName);

})