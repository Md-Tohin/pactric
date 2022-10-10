//  Inch To Feet convert
const inch = 12;
const feet = inch / 12;

console.log(feet);

//  Miles To Kilomiter convert
function milesToKilometer(miles){
    const Kilomiters = miles * 1.609
    return Kilomiters;
}
const miles = 15;
var Kilomiter = milesToKilometer(miles)
console.log(Kilomiter.toFixed(2));
