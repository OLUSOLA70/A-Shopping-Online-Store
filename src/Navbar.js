import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { Shopcontext } from './shopcontext'; // Import the context
import './navbar.css';

export const Navbar = () => {
  const { cartItems } = useContext(Shopcontext); // Access cartItems from the context

  // Calculate the total number of items in the cart
  const getTotalItemsCount = () => {
    return Object.values(cartItems).reduce((total, count) => total + count, 0);
  };

  const totalItems = getTotalItemsCount();

  return (
    <div className="navbar">
      <div className="marquee">
        <h1 style={{ color: 'green', marginRight: '18px' }}>
          SHOP WITH US TODAY AND GET FREE COUPON AND{' '}
          <span style={{ color: 'red' }}>M</span>
          <span style={{ color: 'red' }}>A</span>
          <span style={{ color: 'red' }}>G</span>
          <span style={{ color: 'red' }}>A</span>
          CAP!
        </h1>
      </div>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart" className="cart-icon-container">
          <ShoppingCart size={42} color="#4A90E2" />
          {totalItems > 0 && ( // Display badge only if there are items in the cart
            <span className="cart-badge">{totalItems}</span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
