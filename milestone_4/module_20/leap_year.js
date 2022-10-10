function isLeapYear(year){
    if (year % 4 == 0) {
        return true;
    };
    return false;
}

var year = 1971;
var leapYear = isLeapYear(year);
console.log(leapYear);