
const friends = { 
    name:'Tohin', phone: '0124445', age:23, address: 'Jamalpur'
 }
// const name = friends.name;
// const phone = friends.phone;
// const age = friends.age;

// const {name, age, phone} = friends;
// console.log(name, phone, age);

const {name, roll, classs} = {name: 'tohin', roll: 238, classs: 'ten'};
// console.log(name);

//  Array destructring 
// const [first, second, third, fourth, fifth] = [10, 20, 30, 40, 50];

const num = [10, 20, 30, 40, 50];
const [first, second, third, fourth, fifth] = num;

function getName(){
    return ['Tohin', 'Kamal'];
}

const [me, friend] = getName();

console.log(friend);