
document.getElementById('item-1-plus-button').addEventListener('click', function(){
    const idName = 'item-1-input-value';

    const nameInputValue =  inputValue(idName);
    console.log(nameInputValue);

    const incrementValueById = increaseValueById(nameInputValue);
    console.log(incrementValueById);    

    setItemValue(idName, incrementValueById);
});

document.getElementById('item-1-minus-button').addEventListener('click', function(){
    const idName = 'item-1-input-value';

    const nameInputValue =  inputValue(idName);
    console.log(nameInputValue);

    const decripmentValue = decripmentValueById(nameInputValue);
    console.log(decripmentValue);

    setItemValue(idName, decripmentValue);
});



