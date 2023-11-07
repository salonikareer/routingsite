import React from 'react';
import { CartProvider } from './contexts/CartContext';
import App from './App';

function Main() {
  return (
    <CartProvider>
      <App />
    </CartProvider>
  );
}

export default Main;
