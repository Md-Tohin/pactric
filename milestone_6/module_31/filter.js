const numbers = [1,50, 35,42, 85,105, 81, 40, 25, 55, 250, 9];

const filterFunctionDemo1 = numbers.filter(number => number > 60);
// console.log(filterFunctionDemo1);
const filterFunctionDemo2 = numbers.filter(number => number < 60);
// console.log(filterFunctionDemo2);

const evenNumber = number => number % 2 == 0 ;
const filterFunctionDemo3 = numbers.filter(num => evenNumber(num));
// console.log(filterFunctionDemo3);

const products = [
    {id: 101, name: 'Samsung', price: 32000},
    {id: 102, name: 'Oppo', price: 25000},
    {id: 103, name: 'Walton', price: 20000},
];

const expencive = products.filter(product => product.price > 22000);
// console.log(expencive);

expencive.forEach(product => console.log(product.name));