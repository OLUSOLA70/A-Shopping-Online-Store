import React, { createContext, useState } from 'react';
import { Products } from './products';

export const Shopcontext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= Products.length; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopcontextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = Products.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += cartItems[item] * itemInfo.price;
                }
            }
        }
        return totalAmount;
    };

    // New function to get the total number of items in the cart
    const getTotalItemsCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            totalCount += cartItems[item];
        }
        return totalCount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemcount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const contextValue = { 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateCartItemcount, 
        getTotalCartAmount,
        getTotalItemsCount  // Added this function to the context
    };

    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    );
};
