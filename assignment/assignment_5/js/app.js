function btnDisable(idName){
    const btn = document.getElementById(idName);
    btn.setAttribute('disabled', '');
    btn.style.background='#A2A9AF';
}
function getTextValue(idName) {
    const playerNameElement = document.getElementById(idName);
    const playerName = playerNameElement.innerText;
    return playerName;
}

function getInputValue(inputFieldId){
    const inputFieldIdName = document.getElementById(inputFieldId);
    const inputValue = inputFieldIdName.value;
    return inputValue;
}

function setTextValue(idName, value) {
    const playerNameElement = document.getElementById(idName);
    playerNameElement.innerText = value; 
}

function setPlayerName(idName, btnName, playerName) {
    let playerNumbers = document.querySelectorAll('#selet-players li').length;
    if (playerNumbers >= 5) {
        alert('Already Selected Five Players!');
        return;
    } else{
        btnDisable(btnName);
        const ol = document.getElementById(idName);
        const newLi = document.createElement('li');
        newLi.classList.add('py-2');
        const liSpan = document.createElement('span');
        liSpan.innerText = playerName;
        liSpan.style.paddingLeft = '20px';
        liSpan.style.color = '#BFBFBF';
        newLi.appendChild(liSpan);
        ol.appendChild(newLi);
    }     
}


