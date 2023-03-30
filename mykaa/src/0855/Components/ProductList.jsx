import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import '../CSS/productlist.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://obtainable-gray-tenor.glitch.me/allproducts')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleProductDelete = (id) => {
    axios
      .delete(`https://obtainable-gray-tenor.glitch.me/allproducts/${id}`)
      .then(() => {
        setProducts((prevProducts) => {
          return prevProducts.filter((product) => product.id !== id);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onDelete={handleProductDelete} />
      ))}
    </div>
  );
};


export default ProductList;
