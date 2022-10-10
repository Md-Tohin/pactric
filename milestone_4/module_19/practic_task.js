// Practic Task 01
/*
function bar(){
    console.log('bar');
}

function foo(){
    console.log('foo');
    bar();
}

foo();

// Practic Task 02
function make_avg(num1, num2, num3){
    var total = num1 + num2 + num3;
    var average = total / 3;
    return average;
}

var number1 = 29;
var number2 = 30;
var number3 = 28;
var averageNumber = make_avg(number1, number2, number3);
console.log(averageNumber);

*/

//  Practic No 03
function make_avg(arr){
    var sum = 0;
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum = sum + element;   
        count++  
    }
    var average = sum / count;
    return average;
}

var arr = [10, 20, 30, 40, 50];
var totalAverage = make_avg(arr);
console.log(totalAverage);