import React, { useEffect, useState } from 'react';
import { ShoppingCart } from '../../utilities/ShoppingCart';
import { addToWishListItemInLocalStorage, clearWistsListFromLS, removeWishListItemInLocalStorage } from '../../utilities/WishListCalculation';
import './Friends.css';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('friends.json')
            .then(resp => resp.json())
            .then(data => setFriends(data))
    }, []);
    return (
        <div className=''>
            <h1 className='section-title'>All Friend Here...</h1>
            <button onClick={clearWistsListFromLS}>Clear WishLIst LS</button>
            <div className="friendsContainer">
                {
                    friends.map(friend => <DisplayFriend key={friend._id} friend={friend}></DisplayFriend>)
                }
            </div>
        </div>
    )
}

const DisplayFriend = (props) => {
    const { name, email, phone, age, company, gender, picture, address, _id } = props.friend;
    const addToCartItem = () => addToCart(_id);
    const addToCart = (id) => {
        ShoppingCart(id);
    }
    const addToWishList = (id) => {
        addToWishListItemInLocalStorage(id);
    }

    const removeWishList = id => {
        removeWishListItemInLocalStorage(id);
    }
    return (
        <div className="friend">
            <table border={'1'}>
                <tbody>
                    <tr>
                        <td width={'100'}><strong>Name: </strong></td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td width={'100'}><strong>Email: </strong></td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td width={'100'}><strong>Phone: </strong></td>
                        <td>{phone}</td>
                    </tr>
                    <tr>
                        <td width={'100'}><strong>Age: </strong></td>
                        <td>{age}</td>
                    </tr>
                    <tr>
                        <td width={'100'}><strong>Gender: </strong></td>
                        <td>{gender}</td>
                    </tr>
                    <tr>
                        <td width={'100'}><strong>Company: </strong></td>
                        <td>{company}</td>
                    </tr>
                    <tr>
                        <td width={'100'}><strong>Address: </strong></td>
                        <td>{address}</td>
                    </tr>
                    <tr style={{ textAlign: 'center', color: 'red', fontSize: '16px' }}>
                        <td onClick={addToCartItem} width={'100'} colSpan={2}><strong>Add To Card </strong></td>
                    </tr>
                    <tr style={{ textAlign: 'center', color: 'red', fontSize: '16px' }}>
                        <td onClick={() => addToWishList(_id)} width={'100'} ><strong>Add To Wishlist </strong></td>
                        <td onClick={() => removeWishList(_id)} ><strong>Remove Wishlist </strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}



export { Friends };