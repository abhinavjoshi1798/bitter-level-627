import React from 'react'
import Products from '../pages/Products';
import Orders from '../pages/Orders';
import Users from '../pages/Users';
import { Routes, Route } from 'react-router-dom';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

const Allroutes = () => {
  return (
    <div >
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products/:id/edit" element={<EditProduct/>} />
        
      </Routes>
    </div>
  );
};

export default Allroutes;
