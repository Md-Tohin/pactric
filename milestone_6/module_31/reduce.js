
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.reduce((sum, arrayIndex) => {
    return sum + arrayIndex;
}, 0);

console.log(result);