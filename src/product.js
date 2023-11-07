import React from 'react';

const Product = ({ product }) => {
  const { id, name, price } = product;

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product">
      <h2>{name}</h2>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
