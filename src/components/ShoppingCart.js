import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);

  const getTotalPriceForProduct = (product) => {
    return (
      product.price *
      (product.quantity.small + product.quantity.medium + product.quantity.large)
    );
  };

  const getTotalPrice = () => {
    let totalPrice = 0;

    for (const product of cart) {
      totalPrice += getTotalPriceForProduct(product);
    }

    return totalPrice;
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price.toFixed(2)} | Total: $
            {getTotalPriceForProduct(product).toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
    </div>
  );
};

export default ShoppingCart;
