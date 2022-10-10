console.log(' 1  st');
console.log(' 2  nd');

const timeOutId = setTimeout(() => {
    console.log(' 3  rd');
}, 5000);

clearTimeout(timeOutId);

console.log(' 4  th');
console.log(' 5  th');
console.log(' 6  th');
console.log(' 7  th');
console.log(' 8  th');
console.log(' 9  th');
console.log(' 10  th');