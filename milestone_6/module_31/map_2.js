
const numbers = [10, 20, 30, 40, 50];

//   map Function Demo 01
const mapFunctionDemo1 = numbers.map(num => num / 2);
console.log(mapFunctionDemo1);

//   map Function Demo 02
const mapFunctionDemo2 = numbers.map(x=> x * 2);
console.log(mapFunctionDemo2);

//   map Function Demo 03
const products = [
    {id: 101, name: 'Samsung', price: 32000},
    {id: 102, name: 'Oppo', price: 25000},
    {id: 103, name: 'Walton', price: 20000},
];

const productsName = products.map(product => product.name );
// console.log(productsName);

const productsPrice = products.map(product => product.price);
// console.log(productsPrice);