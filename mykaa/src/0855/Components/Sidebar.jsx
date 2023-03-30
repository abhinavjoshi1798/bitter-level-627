import React, { useState } from 'react';
import { FaBoxOpen, FaUser, FaShoppingCart } from 'react-icons/fa';
import '../CSS/Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('products');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <FaBoxOpen />
        <span>My Store</span>
      </div>
      <ul>
      <Link to="/products"><li
          className={activeItem === 'products' ? 'active' : ''}
          onClick={() => handleItemClick('products')}
        >
          <FaBoxOpen />
         Products
        </li></Link> 
        <Link to="/orders"><li
          className={activeItem === 'orders' ? 'active' : ''}
          onClick={() => handleItemClick('orders')}
        >
          <FaShoppingCart />
          Orders
        </li></Link>
        <Link to="/users"><li
          className={activeItem === 'users' ? 'active' : ''}
          onClick={() => handleItemClick('users')}
        >
          <FaUser />
          Users
        </li></Link>
      </ul>
    </div>
  );
};

export default Sidebar;
