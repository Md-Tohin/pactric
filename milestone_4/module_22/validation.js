function add(num1, num2){
    if (typeof num1 != 'number') {
        return 'num1 is InValid';
    }
    if (typeof num2 != 'number') {
        return 'num2 is Invalid';
    }
    const total = num1 + num2;
    return total;
}

const num1 = '30';
const num2 = true;
const result = add(num1, num2);
console.log(result);