import React from 'react';
import './Wishlist.css';

const Wishlist = ({ wishlist, setWishlist }) => {
  const removeFromWishlist = (id) => setWishlist(wishlist.filter(item => item.id !== id));

  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? <p>Your wishlist is empty.</p> : (
        wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
            <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;