import React, { createContext, useState, useMemo, useCallback } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = useMemo(() => {
    return cart.reduce((acc, product) => acc + product.price, 0);
  }, [cart]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <CartContext.Provider value={{ cart, total, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
