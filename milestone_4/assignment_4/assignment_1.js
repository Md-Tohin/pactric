
function radianToDegree(radian){

    if (typeof radian !== 'number') {
        return 'Please Enter Valied Number!';
    }

    const pi = Math.PI;
    const degree = (180 / pi) * radian;
    return parseFloat(degree.toFixed(2));
}

const degree = radianToDegree(10);
console.log(degree);
