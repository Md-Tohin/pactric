function maxInArray(numbers){
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        const element = numbers[i];
        if (max < numbers[i]) {
            max = numbers[i];
        }
    }
    return max;
}

let numbers = [10, 15, 20, 25, 30, 1, 50, -50, 100];
var maxInArrayNumber = maxInArray(numbers);
console.log(maxInArrayNumber);