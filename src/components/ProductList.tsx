import React from 'react';

interface Product {
  name: string;
  quantity: number;
  rate: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const calculateTotal = (quantity: number, rate: number) => quantity * rate;
  const calculateGST = (total: number) => total * 0.18;
  const calculateGrandTotal = (total: number, gst: number) => total + gst;

  const total = products.reduce((sum, product) => sum + calculateTotal(product.quantity, product.rate), 0);
  const gst = calculateGST(total);
  const grandTotal = calculateGrandTotal(total, gst);

  return (
    <div>
      <h3>Product List</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.quantity} x {product.rate} = {calculateTotal(product.quantity, product.rate)}
          </li>
        ))}
      </ul>
      <div>
        <p>Total: {total}</p>
        <p>GST (18%): {gst}</p>
        <p>Grand Total: {grandTotal}</p>
      </div>
    </div>
  );
};

export default ProductList;
