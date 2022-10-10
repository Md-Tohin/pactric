const phone = {
    name: 'samsung',
    ram: '4gb',
    storage: '128',
    stock: 100,
    price: 20000,
    isNew : true,
    color: ['white', 'black', 'red', 'blue'],
}

const key = Object.keys(phone);
// console.log(key);

const value = Object.values(phone);
// console.log(value);

const both = Object.entries(phone);
// console.log(both);

// both.forEach(property => {
//     console.log(property);
// });

phone.display = 3.95;
console.log(phone);
// Object.seal(phone);
Object.freeze(phone);
phone.display = 3.95;
phone.price = 3000;
delete phone.color;
console.log(phone);