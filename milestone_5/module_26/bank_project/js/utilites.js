
function clear(idName){
    document.getElementById(idName).value = '';
}

function getInputAmount(idName){
    const inputField = document.getElementById(idName);
    const inputAmount = parseFloat(inputField.value);
    return inputAmount;
}

function totalAmount(totalAmountIdName){
    const stringAmount = document.getElementById(totalAmountIdName);
    const amount = parseFloat(stringAmount.innerText);
    return amount;
}

function setTotalAmount(totalBalanceAmountIdName, getBalanceAmount, totalAmountIdName, totalDepositAmount, inputAmount, idName){
    const OrginalAmount = document.getElementById(totalAmountIdName);
    OrginalAmount.innerText = totalDepositAmount + inputAmount;

    const orginalBalanceAmount = document.getElementById(totalBalanceAmountIdName);
    if (idName == 'depositField') {
        orginalBalanceAmount.innerText = getBalanceAmount + inputAmount;
    } else if(idName == 'withdrawField') {
        orginalBalanceAmount.innerText = getBalanceAmount - inputAmount;
    }   

    clear(idName);
}


