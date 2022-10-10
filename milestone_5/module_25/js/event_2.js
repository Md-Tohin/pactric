
document.getElementById('updateButton').addEventListener('click', function(){
    const inputField = document.getElementById('inputField');
    inputText = inputField.value;
    const displayField = document.getElementById('displayField');
    displayField.innerText = inputText;
    inputField.value = '';
});

function changeTextByOnclickFunction(){
    const defaultText = document.getElementById('defaultText');
    defaultText.innerText = 'Change Text By OnClick Function';
}

document.getElementById('textchangeByAddEventListener').addEventListener('click', function(){
    const defaultText = document.getElementById('defaultText');
    defaultText.innerText = 'Change Text By Add Event Listener Function';
})
