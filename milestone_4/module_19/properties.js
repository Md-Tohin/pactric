var shoppingCart = {
    books: 5,
    pen: 10,
    mobile: 2,
    computer: 1,
    keybord: 3,
    mouse: 10,
}

// get property name and value 
var penCount = shoppingCart.pen;
var mobileCount = shoppingCart['mobile'];
var propertyName = 'computer';
var propertyValue = shoppingCart[propertyName];

// console.log(penCount);
// console.log(propertyName);
// console.log(propertyValue);

var propertyNames = Object.keys(shoppingCart);
// console.log(propertyNames);

var propertyValues = Object.values(shoppingCart);
// console.log(propertyValues);

//  Set properties value
shoppingCart.pen = 12;
shoppingCart.mouse = 20;
var property = 'keybord';
shoppingCart[property] = 25;

console.log(shoppingCart);

