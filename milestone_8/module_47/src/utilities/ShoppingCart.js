
const ShoppingCart = id => {
    let ShoppingCart = {}

    // const getShoppingCart = localStorage.getItem('shopping-cart');
    // if (getShoppingCart) {
    //     const parseShoppingCart = JSON.parse(getShoppingCart);
    //     parseShoppingCart[id] = 1;
    //     localStorage.setItem('shopping-cart', JSON.stringify(ShoppingCart));
    // }


    // const quantity = ShoppingCart[id];
    // if (quantity) {
    //     const newQuantity = quantity + 1;
    //     ShoppingCart[id] = newQuantity;
    //     console.log('already exist');
    // }
    // else {
    //     ShoppingCart[id] = 1;
    //     console.log('new item');
    // }
    // localStorage.setItem('shopping-cart', JSON.stringify(ShoppingCart));
    const quantity = ShoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        ShoppingCart[id] = newQuantity;
    } else {
        ShoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(ShoppingCart));
}

export { ShoppingCart };