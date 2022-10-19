import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { addToCartProduct, product } = props;
    const { id, name, img, category, price, quantity, seller, shipping, ratings } = product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <h6>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacture: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button onClick={() => addToCartProduct(product)} className="cart-footer">
                <p> <span className='cart-icon'><FontAwesomeIcon icon={faShoppingCart} /></span> Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;