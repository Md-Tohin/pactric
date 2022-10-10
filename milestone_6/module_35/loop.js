const numbers = [20,40,10,90,30,5,100]
for(const num of numbers){
    // console.log(num);
}

const phone = {
    name: 'samsung',
    ram: '4gb',
    storage: '128',
    stock: 100,
    price: 20000,
    isNew : true,
    color: ['white', 'black', 'red', 'blue'],
}
//  00.   for of can not used with object 

// for(const item of phone){
//     console.log(num);
// }

//  01.   loop in object 
const keys = Object.keys(phone);
for(const key of keys){
    // console.log(key, ' : ' , phone[key]);
}

//  02.   loop in object 
for(const key in phone){
    const value = phone[key];
    // console.log(key, ' : ', value);
}

//  03.   Advance method loop in object 
for(const [key, value] of Object.entries(phone)){
    console.log(key, value);
}



