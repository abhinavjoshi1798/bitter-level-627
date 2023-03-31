import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../Components/ProductList';
import '../CSS/products.css';

const Products = () => {
  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Products</h1>
        <button><Link to="/admin/add-product" className='addpdct'>Add Product</Link></button>
      </div>
      <ProductList />
    </div>
  );
};

export default Products;
