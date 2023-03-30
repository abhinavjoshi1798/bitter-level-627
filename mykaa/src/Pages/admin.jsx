import React from 'react';
import Allroutes from '../0855/Components/Allroutes';
import Sidebar from '../0855/Components/Sidebar';
import '../0855/CSS/admin.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="main-content">
        <Allroutes/>
      </div>
    </div>
  );
};

export default Admin;
