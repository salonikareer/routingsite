// components/ProductList.js

import React from 'react';
import { useCart } from '../contexts/CartContext';
import './ProductList.css'; // Import your CSS file for styling

const ProductList = () => {
  const { dispatch } = useCart();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15.99,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 7.49,
    },
  ];

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
