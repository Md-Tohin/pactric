document.getElementById('player-btn-1').addEventListener('click', function () {
    const playerName = getTextValue('player-name-1');
    setPlayerName('selet-players', 'player-btn-1', playerName);
});

document.getElementById('player-btn-2').addEventListener('click', function () {
    const playerName = getTextValue('player-name-2');
    setPlayerName('selet-players', 'player-btn-2', playerName);
});

document.getElementById('player-btn-3').addEventListener('click', function () {
    const playerName = getTextValue('player-name-3');
    setPlayerName('selet-players', 'player-btn-3', playerName);
});

document.getElementById('player-btn-4').addEventListener('click', function () {
    const playerName = getTextValue('player-name-4');
    setPlayerName('selet-players', 'player-btn-4', playerName);
});

document.getElementById('player-btn-5').addEventListener('click', function () {
    const playerName = getTextValue('player-name-5');
    setPlayerName('selet-players', 'player-btn-5', playerName);
});

document.getElementById('player-btn-6').addEventListener('click', function () {
    const playerName = getTextValue('player-name-6');
    setPlayerName('selet-players', 'player-btn-6', playerName);
});

document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerAmount = getInputValue('input-field-id');
    let playerNumbers = document.querySelectorAll('#selet-players li').length;
    if (playerNumbers == 0) {
        alert('Please Choose Your Player, and Try Again!');
        return;
    }
    if (perPlayerAmount == '') {
        alert('Please enter per player amount!');
        return;
    }
    if (isNaN(perPlayerAmount)) {
        alert('Please enter Valid per player amount!');
        return;
    }
    const playerExpensesSubTotal = perPlayerAmount * playerNumbers;
    setTextValue('player-expenses', playerExpensesSubTotal);
    setTextValue('total-cost', playerExpensesSubTotal);
});

document.getElementById('total-calculate-btn').addEventListener('click', function () {
    const managerInputValue = parseInt(getInputValue('manager-input-field'));
    const coachInputValue = parseInt(getInputValue('coach-input-field'));

    const playerExpensesString = getTextValue('player-expenses');
    const playerExpensesValue = parseInt(playerExpensesString);
    if (isNaN(managerInputValue)) {
        alert('Please Enter Manager Amount, and Try Again!');
        return;
    }
    if (isNaN(coachInputValue)) {
        alert('Please Enter Coach Amount, and Try Again!');
        return;
    }
    const totalCost = playerExpensesValue + managerInputValue + coachInputValue;
    setTextValue('total-cost', totalCost);
});
