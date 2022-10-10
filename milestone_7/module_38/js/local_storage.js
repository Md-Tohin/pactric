
const getInputValue = (inputFieldId) => {
    const inputField = document.getElementById(`${inputFieldId}`);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const setItemLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}

const nameAddBtn = () => {    
    const getName = getInputValue('name-field');    
    setItemLocalStorage('name', getName);
}

const nameRemoveBtn = () => {
    localStorage.removeItem('name');
}

const ageAddBtn = () => {    
    const getAge = getInputValue('age-field');    
    setItemLocalStorage('age', getAge);
}

const ageRemoveBtn = () => {
    localStorage.removeItem('age');
}

const clearBtn = () => {
    localStorage.clear();
}