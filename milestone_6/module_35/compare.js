/*

const first = {a: 2}
const second = {a: 2}
const third = second;

if (first === second) {
    console.log('They are same ');
} else {
    console.log('Defirent');
}

*/

/*
const first = {a: 2, b:5, c:3}
const second = {a: 2, c:3, b:5}
const third = second;

const firstString = JSON.stringify(first);
const secontString = JSON.stringify(second);

if (firstString === secontString) {
    console.log('They are same ');
} else {
    console.log('Defirent');
}
*/

const first = {a: 2, b:5, c:3}
const second = {a: 2, c:3, b:5}

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length === secondKeys.length) {
        for(const key of firstKeys){
            if (first[key] !== second[key]) {
                return false;
            }
        }
        return true
    } else {
        return false;   
    }
}

const isSame = compareObject(first, second);
console.log(isSame);
