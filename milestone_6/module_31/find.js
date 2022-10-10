const numbers = [1,50, 35,42, 85,105, 81, 40, 25, 55, 250, 9];

const findFunctionDemo1 = numbers.find(n => n > 0);
// console.log(findFunctionDemo1);

const products = [
    {id: 101, name: 'Samsung', price: 32000},
    {id: 102, name: 'Oppo', price: 25000},
    {id: 103, name: 'Walton', price: 20000},
];

const price = products.find(product => product.price > 20000);
console.log(price.name);