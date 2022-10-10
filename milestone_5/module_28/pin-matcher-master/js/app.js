function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pinString;
    } else {
        return getPin();
    }
}

function generatePin(){
    const randomPin = Math.round(Math.random()*10000);
    return randomPin;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculate').addEventListener('click', function(event){
    const numbers = event.target.innerText;
    const numberDisplayField =  document.getElementById('number-display-field');
    const newNumbers = numberDisplayField.value + numbers;

    if (isNaN(numbers)) {
        if (numbers === 'C') {
            numberDisplayField.value = '';
        }
        if (numbers === '<') {            
            const values = numberDisplayField.value;
            const numbersArray = values.split('');
            numbersArray.pop();
            const displayValue = numbersArray.join('');
            numberDisplayField.value = displayValue;
        }
    } else {
        numberDisplayField.value = newNumbers;
    }
});

document.getElementById('submit-btn').addEventListener('click', function(){
    const numberDisplayField =  document.getElementById('number-display-field');
    const displayNumbers = numberDisplayField.value;

    const displayPinField = document.getElementById('display-pin');
    const pinNumbers = displayPinField.value;

    const notMatch = document.getElementById('not-match');
    const match = document.getElementById('match');
    if (pinNumbers === displayNumbers) {        
        match.setAttribute('style', 'display: block');        
        notMatch.style.display='none';
    } else {        
        notMatch.setAttribute('style', 'display: block');        
        match.style.display='none';
    }

});