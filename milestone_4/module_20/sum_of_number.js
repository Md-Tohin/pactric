function sumOfNumber(start, end){
    var sum = 0;
    var numbers = [];
    for(let i = start; i <= end; i++){
        numbers.push(i);       
        sum = sum + i;
    }    
    return [sum, numbers];
}

var startNumber = 5;
var endNumber = 15;
var result = sumOfNumber(startNumber, endNumber);

console.log(result);