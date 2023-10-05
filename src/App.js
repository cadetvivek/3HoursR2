import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import OrderSummary from './components/OrderSummary';

function App() {
  return (
    <CartProvider>
      <div>
        <ProductForm />
        <ProductList />
        <ShoppingCart />
        <OrderSummary />
      </div>
    </CartProvider>
  );
}

export default App;
