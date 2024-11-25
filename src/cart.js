import React, { useContext } from 'react';
import { Products } from './products';  // Assuming this imports your product data
import { Shopcontext } from './shopcontext';  // Your context provider
import { CartItem } from './cartitem';  // Component to display each cart item
import './cart.css';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(Shopcontext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Your Selected Cart Items Below:</h1>
      </div>
      <div className='cartItems'>
        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null; // Ensure a return value even if no product is displayed
        })}
      </div>

      {totalAmount > 0 ? (
        <div className='checkout'>
          <p className='subtotal'>
  Subtotal: <span 
    className='totalAmount' 
    style={{
      display: 'inline-block', 
      borderBottom: '3px solid blue', 
      paddingBottom: '2px'
    }}
  >
    ${totalAmount}
  </span>
</p>

          <div className='checkoutButtons'>
            <button onClick={() => navigate('/')}>Continue Shopping</button>
            <button onClick={() =>navigate("/checkout")}>Checkout to PAY</button>
          </div>
        </div>
      ) : (
        <h1>Your CART is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
