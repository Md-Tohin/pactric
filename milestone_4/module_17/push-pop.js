var numbers = [10, 20, 25, 40, 50, 60, 70, 80]
// numbers[2] = 30 

//  use push to add element to an array as the last element array
// numbers.push(90)
// console.log(numbers[2]);

//  use pop to remove element to an array as the Last element array
// var element = numbers.pop()
// console.log(numbers);
// console.log(element);

// var item  = 30;
// var n = 3;

// for (let i = 8; i > n; i--) {
//     // console.log(i);
//     numbers[i + 1] = numbers[i]
//     if (numbers[i] == n){
//         numbers[i] = numbers.push(item)
//     }
//     console.log(numbers[i]);
//     if (i == n) {
//         numbers[i]
//         numbers[i] = 30
//         // console.log(numbers[i]);
//     }
// }

// console.log(numbers);

numbers.shift()
// console.log(numbers);

numbers.unshift(15)
// console.log(numbers);


var ages = [20, 25, 30, 51, 40,];
var result = ages.slice(1, 4)
console.log(result);
