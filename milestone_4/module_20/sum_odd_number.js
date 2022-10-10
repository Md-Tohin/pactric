function oddNumbersInArray(numbers){
    var oddNumberArray = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (i % 2 !== 0) {
            oddNumberArray.push(element);     
        }
    }  
    return oddNumberArray;  
}

function sumOddNumbers(numbers){
    sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];        
        if (element % 2 !== 0) {
            sum = sum + element;
        }
    }
    return sum
}

var numbers = [10, 15, 20, 25, 30, 35, 40, 45, 50];

var oddNumbersArray = oddNumbersInArray(numbers);
console.log(oddNumbersArray);

var sumOddNumber = sumOddNumbers(numbers)
console.log('Sum of Odd Number : ' ,sumOddNumber);

