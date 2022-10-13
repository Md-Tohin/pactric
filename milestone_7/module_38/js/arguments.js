function sum(a, b, c){
    // console.log(arguments);
    // console.log(arguments[5]);
    // const args = [...arguments];
    // console.log(args);
    const total = a + b + c;
    return total;
}

const result = sum(5, 3, 2, 6, 9, 4, 7);
// console.log(result);
console.log(typeof sum);
console.log(sum.length);