
//  Option No :- 01
{/* <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button>  */ }

//  Option No :- 02
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//  Option No :- 03
const makeBlueButton = document.getElementById('makeBlueButton');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//  Option No :- 04
const makeAquaButton = document.getElementById('makeAquaButton');
makeAquaButton.onclick = function makeAqua() {
    document.body.style.background = 'aqua';
}

//  Option No :- 05
const makeOrrangeButton = document.getElementById('makePinkButton')
makePinkButton.addEventListener('click', makePink)
function makePink() {
    document.body.style.background = 'pink';
}

//  Option No :- 06
const makeGreenButton = document.getElementById('makeGreenButton');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.background = 'green';
});

//  Option No :- 07
document.getElementById('makeTomatoButton').addEventListener('click',function(){
    document.body.style.background='tomato';
});