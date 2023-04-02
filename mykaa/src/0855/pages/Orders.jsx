import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/order.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('https://obtainable-gray-tenor.glitch.me/orders')
      .then(res => {
        setOrders(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleUpdateStatus = (orderId, status) => {
    axios.patch(`/api/orders/${orderId}`, { status })
      .then(res => {
        const updatedOrders = orders.map(order => {
          if (order.id === res.data.id) {
            return res.data;
          }
          return order;
        });
        setOrders(updatedOrders);
      })
      .catch(err => console.log(err));
  };

  const handleDeleteOrder = (orderId) => {
    axios.delete(`/api/orders/${orderId}`)
      .then(() => {
        const filteredOrders = orders.filter(order => order.id !== orderId);
        setOrders(filteredOrders);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='ordercontainer'>
      <h1>Order Page</h1>
      <table className='ordertable'>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User Info</th>
            <th>Product Details</th>
            <th>Order Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>
                <p>{order.userInfo.name}</p>
                <p>{order.userInfo.email}</p>
                <p>{order.userInfo.phone}</p>
                <p>{order.userInfo.pincode}</p>
                <p>{order.userInfo.house}, {order.userInfo.area}</p>
              </td>
              <td>
                {order.cartData.map(item => (
                  <div key={item.id}>
                    <p>{item.name}</p>
                    <img src={item.media[0].url} alt={item.name} />
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                ))}
              </td>
              <td>
                {order.cartData.reduce((acc, item) => acc + item.price * item.quantity, 0)}
              </td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
                <select value={order.status} onChange={(e) => handleUpdateStatus(order.id, e.target.value)}>
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
