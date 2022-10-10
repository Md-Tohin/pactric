const max = Math.max(10, 20, 90, 5, 50);
// console.log(max);

const numbers = [10, 20, 90, 5, 50];
// const maxInArray = Math.max(numbers);
const maxInArray = Math.max(...numbers);
// console.log(maxInArray);

const numbersArray = [10, 20, 90, 5, 50];
const newNumberArray1 = [...numbersArray];
newNumberArray1.push(100);
const newNumberArray2 = [200, 600, ...newNumberArray1, 45, 300];
console.log(numbersArray);
console.log(newNumberArray1);
console.log(newNumberArray2);