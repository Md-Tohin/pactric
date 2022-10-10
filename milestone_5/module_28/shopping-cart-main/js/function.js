function inputValue(idName){
    const itemInputfield = document.getElementById(idName);
    const itemInputValue = parseInt(itemInputfield.value);
    return itemInputValue;
}

function increaseValueById(nameInputValue){    
    const setItemValue = nameInputValue + 1;
    return setItemValue;
}

function decripmentValueById(nameInputValue){
    const decripmentValueByOne = nameInputValue - 1;
    return decripmentValueByOne;
}

function setItemValue(idName, setValue){
    const setItemInputField = document.getElementById(idName);
    setItemInputField.value = setValue;
}