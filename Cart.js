import React from 'react';
import './Cart.css';

const Cart = ({ cart, setCart, placeOrder }) => {
  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total}</h3>
          <button onClick={placeOrder} className="place-order-btn">Place Order</button>
        </>
      )}
    </div>
  );
};

export default Cart;