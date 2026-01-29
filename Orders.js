import React, { useState, useEffect } from 'react';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem('orders')) || []);
  }, []);

  return (
    <div className="orders">
      <h2>Your Orders</h2>
      {orders.length === 0 ? <p>No orders yet.</p> : (
        orders.map((order) => (
          <div key={order.id} className="order-item">
            <p>Order ID: {order.id}</p>
            <p>Total: ${order.total}</p>
            <p>Items: {order.items.map(item => item.name).join(', ')}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;