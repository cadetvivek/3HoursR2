import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} - {product.quantity.large} Large,{' '}
            {product.quantity.medium} Medium, {product.quantity.small} Small
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
