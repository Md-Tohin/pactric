import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <img src={logo} alt="" />
            </nav>
            <div className="link-item">
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </header>
    );
};

export default Header;