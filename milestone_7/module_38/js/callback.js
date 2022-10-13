
const add = (callBack, value) => {
    callBack(value)
}

const callBack = (name) => {
    console.log(`Your name is : ${name}`);
}

const callBack2 = (age) => {
    console.log(`Your age is : ${age}`);
}

const callBack3 = (email) => {
    console.log(`Your email is : ${email}`);
}

add(callBack, 'Tohin');
add(callBack2, 25);
add(callBack3, 'mdtohin8585@gmail.com');

// function submitHandler(){
//     console.log('Submit button clicked');
// }
// document.getElementById('submit-btn').addEventListener('click', submitHandler);