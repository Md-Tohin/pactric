//  01.  Create object using object litarels 
const player = {};
player.name = 'Tohin';
player.phone = 1821458;
player.bat = function(){
    console.log('Batsman');
}
// console.log(player);
// player.bat();

const phone = {
    name: 'Md Tohin',
    roll: 150739,
    class: 'Ten',
    institute: function(){
        console.log('Dhaka institute of Technology');
    },

}
// console.log(phone);
// phone.institute();

//  02.    object constructor
// const student = Object()
const student = new Object()
student.name = 'Kamal',
student.id = 102;
// console.log(student);

//  03.   
const item = Object.create(phone);
// console.log(item.name);

//  04.  class
class Person{
    name = 'Jamal';
    address = 'Dhaka';
    constructor (age){
        this.age = age;
    }

    setInfo(id, name, gender){
        this.id = id;
        this.name = name;
        this.gender = gender;
    }
    displayInfo(id, name, gender){
        console.log(id);
        console.log(name);
        console.log(gender);
    }
    
}

const person1 = new Person(24);
// console.log(person1);

//  05.  Function
// function info(id, name, gender){
//     this.id = id;
//     this.name = name;
//     this.gender = gender;
// }

person1.setInfo(101, 'happy', 'female');
const displayInformation = person1.displayInfo(101, 'happy', 'female');
console.log(displayInformation);


 


