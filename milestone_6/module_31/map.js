const numbers = [10, 20, 30, 40, 50];

// function getDoubles(numbers) {
//     const newNumbersArray = [];
//     for (const number of numbers) {
//         const calculateDouble = doubleIt(number);
//         newNumbersArray.push(calculateDouble);
//     }
//     return newNumbersArray;
// }

const doubleIt = num => num * 2;
// const getDoublesArary = getDoubles(numbers);

const useMapFunction = numbers.map(doubleIt);
const useMapFunction2 = numbers.map(num => num * 2);
const useMapFunction3 = [1, 2, 3, 4, 5].map(x => x * 2);
console.log(useMapFunction);
console.log(useMapFunction2);
console.log(useMapFunction3);