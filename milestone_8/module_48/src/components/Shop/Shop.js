import React, { useEffect, useState } from 'react';
import { addItemLS, getStoredCartProduct } from '../../utilities/cart_calculation';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(resp => resp.json())
            .then(data => setProducts(data))
    }, []);

    const [cart, setCart] = useState([]);

    const addToCartProduct = (product) => {
        let newCart = [];
        const exists = cart.find(pro => pro.id === product.id);
        if(exists){
            const restCart = cart.filter(cartItem => cartItem.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...restCart, exists];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addItemLS(product.id);
    }

    useEffect(() => {
        const getStoreCartProduct = getStoredCartProduct();
        let savedCartProducts = [];
        for (const id in getStoreCartProduct) {
            const cartProductDetails = products.find(product => product.id === id);
            if (cartProductDetails) {
                const quantity = getStoreCartProduct[id];
                cartProductDetails.quantity = quantity;
                savedCartProducts.push(cartProductDetails);
            }
        }
        setCart(savedCartProducts);
    }, [products]);

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCartProduct={addToCartProduct}>
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;