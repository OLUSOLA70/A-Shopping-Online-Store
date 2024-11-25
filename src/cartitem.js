import React, { useContext } from 'react';
import { Shopcontext } from './shopcontext';
import "./cart.css";
export const CartItem = (props) => {
    
    const { id, productName, price, productImage } = props.data || {};
    const { cartItems, addToCart, removeFromCart, updateCartItemcount } = useContext(Shopcontext);

    // Safeguard for undefined cartItems[id]
    const itemCount = cartItems?.[id] || 0;

    // Early return if props.data is missing
    if (!props.data) {
        return <div>Loading...</div>;
    }

    return (
        <div className='cartItem'>
            <img src={productImage} alt={productName} />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
                <div className='countHandler'>
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input
                        type='number'
                        value={itemCount}
                        onChange={(e) => updateCartItemcount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    );
};
