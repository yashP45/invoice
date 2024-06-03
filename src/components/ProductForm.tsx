import React, { useState } from 'react';

interface ProductFormProps {
  onAddProduct: (product: { name: string; quantity: number; rate: number }) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [rate, setRate] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddProduct({ name, quantity, rate });
    setName('');
    setQuantity(1);
    setRate(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Product Quantity</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} required />
      </div>
      <div>
        <label>Product Rate</label>
        <input type="number" value={rate} onChange={(e) => setRate(parseFloat(e.target.value))} required />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
