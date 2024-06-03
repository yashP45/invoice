import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../api/api';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

interface Product {
  name: string;
  quantity: number;
  rate: number;
}

const AddProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token') || '';
  console.log(token)
  const handleAddProduct = async (product: Product) => {
    try {
      const { data } = await addProduct(product, token);
      setProducts([...products, data]);
    } catch (err) {
      alert('Error adding product');
    }
  };

  const handleNext = () => {
    navigate('/generate-pdf');
  };

  return (
    <div>
      <h2>Add Products</h2>
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default AddProductPage;
