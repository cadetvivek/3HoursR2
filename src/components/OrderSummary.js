import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const OrderSummary = () => {
  const { cart,  clearCart } = useContext(CartContext);

  const handlePlaceOrder = () => {
    // Implement your order placement logic here
    alert('Order placed successfully!');
    clearCart();
  };

  const handleCancelOrder = () => {
    clearCart();
  };

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Shoes in Cart: {cart.length}</p>
      <button onClick={handlePlaceOrder}>Place Order</button>
      <button onClick={handleCancelOrder}>Cancel</button>
    </div>
  );
};

export default OrderSummary;
