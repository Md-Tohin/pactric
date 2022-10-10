
function isJavaScriptFile (str){

    if (typeof str !== 'string') {
        return 'Please Enter Valied File Name!';
    }
    
    const checkfileExtension = str.endsWith('.js');
    return checkfileExtension;
} 

const output = isJavaScriptFile('app.js');
console.log(output);