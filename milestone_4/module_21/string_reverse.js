function stringReverse(text){
    let result = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        result = result + element;
    }
    return result;
}
let myString = 'My name is Tohin';
var result = stringReverse(myString);
console.log(result);