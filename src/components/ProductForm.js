import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductForm = () => {
  const { addToCart } = useContext(CartContext);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState({
    small: 0,
    medium: 0,
    large: 0,
  });

  const handleAddProduct = () => {
    const product = {
      name: productName,
      description,
      price: parseFloat(price),
      quantity,
    };

    addToCart(product);
    // Clear the form inputs
    setProductName('');
    setDescription('');
    setPrice('');
    setQuantity({ small: 0, medium: 0, large: 0 });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Shoe Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity (Large)"
        value={quantity.large}
        onChange={(e) =>
          setQuantity({ ...quantity, large: parseInt(e.target.value) })
        }
      />
      <input
        type="number"
        placeholder="Quantity (Medium)"
        value={quantity.medium}
        onChange={(e) =>
          setQuantity({ ...quantity, medium: parseInt(e.target.value) })
        }
      />
      <input
        type="number"
        placeholder="Quantity (Small)"
        value={quantity.small}
        onChange={(e) =>
          setQuantity({ ...quantity, small: parseInt(e.target.value) })
        }
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductForm;
