const add = (first, second) => first + second;

const fullName = (firstName, lastName) => firstName +' '+ lastName;

const multiply = (num1, num2) => num1 * num2;

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

//  no perameter 
const getPi = () => Math.PI;

//  one perameter 
const doubleIt = num => num * 2;

//  multililne arrow function 
const multiArrowFunction = (x, y, z) => {
    const xPlusY = x + y;
    const yPlusZ = y + z;
    const result = xPlusY + yPlusZ;
    return result;
}

console.log(multiArrowFunction(5, 10, 20));