
function updateCaseNumber(isIncrease, numberFieldId) {
    const itemInputfield = document.getElementById(numberFieldId);
    const itemInputValue = parseInt(itemInputfield.value);
    let newNumber;
    if (isIncrease === true) {
        newNumber = itemInputValue + 1;
    } else {
        newNumber = itemInputValue - 1;
    }
    itemInputfield.value = newNumber;
    return newNumber;
}

function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotal = parseInt(phoneTotalElement.innerText);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubtotal(){
    //  calculate subtotal
    const phoneTotalElement = getTextElementValueById('case-total');
    const caseTotalElement = getTextElementValueById('case-price');
    const currentSubtotal = phoneTotalElement + caseTotalElement;
    setTextElementValueById('subTotal', currentSubtotal); 
    
    //  calculate tax 
    const taxAmountString = (currentSubtotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('taxAmount', taxAmount);

    //  calculate grand Total
    const grandTotal = currentSubtotal + taxAmount;
    setTextElementValueById('grandTotal', grandTotal);    
}

document.getElementById('item-1-plus-button').addEventListener('click', function () {
    const newNumber = updateCaseNumber(true, 'case-number-field');
    const newTotal = 1219 * newNumber;
    document.getElementById('case-total').innerText = newTotal;
    calculateSubtotal();

});

document.getElementById('item-1-minus-button').addEventListener('click', function () {
    const newNumber = updateCaseNumber(false, 'case-number-field');
    const newTotal = 1219 * newNumber;
    document.getElementById('case-total').innerText = newTotal;
    calculateSubtotal();
});

document.getElementById('increaseCaseNumber').addEventListener('click', function(){
    const newNumber = updateCaseNumber(true, 'caseInputNumberField');
    const newTotal = 59 * newNumber;
    document.getElementById('case-price').innerText = newTotal;
    calculateSubtotal()
});

document.getElementById('decressCaseNumber').addEventListener('click', function(){
    const newNumber = updateCaseNumber(false, 'caseInputNumberField');
    const newTotal = 59 * newNumber;
    document.getElementById('case-price').innerText = newTotal;
    calculateSubtotal()
});
