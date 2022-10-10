
const getInputValue = (inputFieldId) => {
    const inputField = document.getElementById(`${inputFieldId}`);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const formatItemLocalStorage = () => {
    let items = localStorage.getItem('cart');
    let cart = {}
    if (items) {
        cart = JSON.parse(items);
    }
    return cart;
}

const setItemLocalStorage = (key, value) => {
    const cart = formatItemLocalStorage();
    cart[key] = value;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}

const addProduct = () => {    
    const getName = getInputValue('name-field');    
    const getQuantity = getInputValue('quantity-field');    
    setItemLocalStorage(getName, getQuantity);
    displayProduct(getName, getQuantity);
}

const displayProduct = (productNme, productQuantity) => {
    const displayProductArea = document.getElementById('display-cart');
    const newItem = document.createElement('tr');
    newItem.innerHTML = `
        <tr>
            <td>${productNme}</td>
            <td>${productQuantity}</td>
        </tr>
    `;
    displayProductArea.appendChild(newItem);
}

const displayStoreProducts = () => {
    const storeProducts = formatItemLocalStorage();
    for(const product in storeProducts){
        const quantity = storeProducts[product];
        displayProduct(product, quantity);
    }
}

displayStoreProducts();




