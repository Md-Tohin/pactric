const user = { id: 101, name: 'Tohin', gender: 'Male', age: 23 };
// console.log(user);

const stringifiedUser = JSON.stringify(user);
// console.log(stringifiedUser);

const shop = {
    owner: 'Kamal',
    address: {
        street: 'Amtola Road', 
        city: 'Dhaka',
        country: 'Bangladesh',        
    },
    products: ['Mobile', 'Laptop', 'Computer', 'Keyboard', 'Mouse'],
    revenue: 25000,
    isOpen: true,
    isNew: false,
}
console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopJSONObj = JSON.parse(shopJSON);
console.log(shopJSONObj);