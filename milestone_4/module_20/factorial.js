/*

    5! = 5 * 4 * 3 * 2 * 1 
    4! = 4 * 3 * 2 * 1 
    3! = 3 * 2 * 1 
    2! = 2 * 1 
    1! = 1 

*/

function factorial(n){
    var result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
var number = 5;
var fact = factorial(number);
console.log(fact);

