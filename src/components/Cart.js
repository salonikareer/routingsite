// components/Cart.js

import React from 'react';
import { useCart } from '../contexts/CartContext';
//import './Cart.css';

const Cart = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', product });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.cart.map((item) => (
          <li key={item.product.id}>
            {item.product.name} - ${item.product.price}
            <button onClick={() => removeFromCart(item.product)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
