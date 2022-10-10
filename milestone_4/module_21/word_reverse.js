function WordReverse(text){
    let words = text.split(' ');
    let result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i]; 
        result.push(element);
    }
    getReverseWord = result.join(' ')
    return getReverseWord;
}
let mySentense = 'My name is Tohin';
var result = WordReverse(mySentense);
console.log(result);