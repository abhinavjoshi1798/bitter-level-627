import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Products from '../../0855/pages/Products';
import Orders from '../../0855/pages/Orders';
import Users from '../../0855/pages/Users';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

const Allroutes = () => {
 
  const { id } = useParams();

  return (
    <div>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products/:id/edit" element={<EditProduct />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
