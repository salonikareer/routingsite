// contexts/CartContext.js

import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Implement logic to add items to the cart
      const updatedCart = [...state.cart, action.product]; // Add the product to the cart
      return { ...state, cart: updatedCart };

    case 'REMOVE_FROM_CART':
      // Implement logic to remove items from the cart
      const filteredCart = state.cart.filter((item) => item.id !== action.productId); // Remove the product by its ID
      return { ...state, cart: filteredCart };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
