import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="marquee">
      <h1 style={{ color: ' green', marginRight: '18px' }}>
    SHOP WITH US TODAY AND GET FREE COUPON AND{' '}
    <span style={{ color: 'red' }}>M </span> 
    <span style={{ color: 'red' }}> A </span>
    <span style={{ color: 'red' }}> G </span>
    <span style={{ color: 'red' }}> A </span>
       CAP !
  </h1>
      </div>
      <div className="links">
        <Link to="/">Shop</Link>  
        <Link to="/cart">
          <ShoppingCart size={42} color="#4A90E2" />  
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
