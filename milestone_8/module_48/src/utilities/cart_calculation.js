
const addItemLS = (id) => {
    let shoppingCart = {};
    //  get stored cart item
    const cartItems = localStorage.getItem('shopping-cart');
    if (cartItems) {
        shoppingCart = JSON.parse(cartItems);
    }
    
    //  add new cart item
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = +quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getStoredCartProduct = () => {
    let shoppingCart = {};

    const storedShoppingCart = localStorage.getItem('shopping-cart');
    if (storedShoppingCart) {
        shoppingCart = JSON.parse(storedShoppingCart);
    }
    return shoppingCart;
}

const clearCart = () => {
    const exists = localStorage.getItem('shopping-cart');
    if (exists) {
        localStorage.removeItem('shopping-cart');
    }
}



export {addItemLS, getStoredCartProduct, clearCart};