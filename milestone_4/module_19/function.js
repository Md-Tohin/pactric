
function getAverage(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Mark = 29;
const assignment2Mark = 30;
const asstgnment3Mark = 28;

const myAverage = getAverage(assignment1Mark, assignment2Mark, asstgnment3Mark);
console.log(myAverage);







/*
var num1 = 30;
var num2 = 20;
var result;

function sum(n1, n2){
    n1 = num1;
    n2 = num2;
    result = n1 + n2;
    return result;
    // console.log('Summation is : ' + result);
    // console.log('Summation is : ', result);
}

result = sum(num1, num2);
console.log(result);
*/
