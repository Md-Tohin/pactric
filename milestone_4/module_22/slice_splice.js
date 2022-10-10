const age = [20, 10, 54, 85, 96, 75, 34, 5];
// const partial = age.slice(1,4);
// console.log(partial);
// console.log(age);

const partial = age.splice(1, 4, 15, 50, 70);
console.log(partial);
console.log(age);