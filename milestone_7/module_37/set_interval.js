console.log(' 1  st');
console.log(' 2  nd');

let seconds = 0;
const timeOutId = setInterval(() => {
    console.log(++seconds);

    if (seconds === 10) {
        clearInterval(timeOutId);
    }
}, 1000);

console.log(' 4  th');
console.log(' 5  th');
console.log(' 6  th');
console.log(' 7  th');
console.log(' 8  th');
console.log(' 9  th');
console.log(' 10  th');