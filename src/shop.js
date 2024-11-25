import React, { useEffect, useState } from 'react';
import { Products } from './products';
import { Product } from './product';
import './shop.css';
import storeIcon from './assets/store.png'; // Adjust the path as per your project structure

export const Shop = () => {
  const [text, setText] = useState('');
  const [showStoreName, setShowStoreName] = useState(false);

  useEffect(() => {
    const welcomeText = 'Welcome to ';
    let currentIndex = 0;

    const typeWelcome = () => {
      if (currentIndex < welcomeText.length) {
        setText(welcomeText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWelcome, 100); // Adjust typing speed here
      } else {
        setShowStoreName(true);
        setTimeout(resetAnimation, 3000); // Wait before reset
      }
    };

    const resetAnimation = () => {
      setShowStoreName(false);
      setText('');
      currentIndex = 0;
      setTimeout(typeWelcome, 500); // Small pause before restarting
    };

    typeWelcome();
  }, []);

  return (
    <div className='shop'>
      <div className='shopBackground'></div>
      <div className='stars'></div>
      <div className='shoptitle'>
        <h1>
          <span className="typing-text">{text}</span>
          {showStoreName && (
            <span className="store-name fade-in cream-text">CROWNIRAN STORES</span>
          )}
          <img src={storeIcon} alt="Store Icon" className="store-icon" />
        </h1>
      </div>
      <div className='products'>
        {Products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
