var shoppingCart = {
    books: 5,
    pen: 10,
    mobile: 2,
    computer: 1,
    keybord: 3,
    mouse: 10,
}

var keys = Object.keys(shoppingCart);
// console.log(keys);

var values = Object.values(shoppingCart);
// console.log(values);

//  Print object keys and values for loop
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = shoppingCart[key];
    // console.log(key, '=>', value);    
}

//  Print object keys and values for in loop
for (var key in shoppingCart) {
    var value = shoppingCart[key];
    console.log(key, '=> ', value);   
}