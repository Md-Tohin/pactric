
const addToWishListItemInLocalStorage = id => {
    let wishList = {};
    //  Create Wishlist
    const storedItem = localStorage.getItem('wishList');
    if (storedItem) {
        wishList = JSON.parse(storedItem);
    }
    //  add Quantity
    const quantity = wishList[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        wishList[id] = newQuantity;
    } else {
        wishList[id] = 1;
    }
    localStorage.setItem('wishList', JSON.stringify(wishList));
}

const removeWishListItemInLocalStorage = id => {
    const storedItem = localStorage.getItem('wishList');
    if (storedItem) {
        const storeItemParse = JSON.parse(storedItem);
        if (id in storeItemParse) {
            delete storeItemParse[id];
            localStorage.setItem('wishList', JSON.stringify(storeItemParse));
        }
    }
}

const clearWistsListFromLS = () => {
    localStorage.removeItem('wishList');
}

export { addToWishListItemInLocalStorage, removeWishListItemInLocalStorage, clearWistsListFromLS};