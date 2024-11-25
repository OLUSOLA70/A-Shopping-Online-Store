import React, { useContext } from 'react';
import { Shopcontext } from './shopcontext';

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(Shopcontext); 

    const cartItemAmount = cartItems[id] || 0; 

    return (
        <div className='product'>
            <img src={productImage} alt={productName} />
            <div className='desc'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>
            <button className='addcartbtn' onClick={() => addToCart(id)}>
                Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
            </button>
        </div>
    );
};
