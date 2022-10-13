//  Primitive type are pass by value
let num1 = 5;
let num2 = 3;

function multiply(a, b){
    a = 2;
    const result = a * b;
    return result;
}

// console.log(num1);
// const answer = multiply(num1, num2);
// console.log(answer);
// console.log(num1);


//  Object or array pass by reference
const student1 = {id: 101, name:'Tohin', email: 'tohin@gmail.com'};
const student2 = {id: 102, name: 'Karim', email: 'karim@gmail.com'};

console.log(student1, student2);
function makeInfo(stu1, stu2){
    stu1.name = 'Md Tohin'
    stu2.email = 'newkarim@gmail';
}
makeInfo(student1, student2);
console.log(student1,student2);

