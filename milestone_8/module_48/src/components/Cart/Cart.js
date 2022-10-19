import React from 'react';
import { clearCart } from '../../utilities/cart_calculation';
import './Cart.css';

const Cart = ({cart}) => {
    // console.log(cart);
    let totalPrice = 0;
    let shippingPrice = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + (product.price * product.quantity);
        shippingPrice = shippingPrice + product.shipping * product.quantity;     
    }
    const tax = +(totalPrice * 0.1).toFixed(1);
    const grandTotal = totalPrice + shippingPrice + tax;
    return (
        <div className='cart'>
            <h1 className='cart-title'>Order Summary</h1>
            <div className="cart-details">
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shippingPrice}</p>
                <p>Tax (10%): ${tax}</p>
                <h3>Grand Total: ${grandTotal}</h3>
            </div>
            <div className="btn">
                <button onClick={() => clearCart()} className='clear-btn'>Clear Cart <span ></span> </button>
                <button className='review-btn'>Review Order <span ></span> </button>
            </div>
        </div>
    );
};

export default Cart;