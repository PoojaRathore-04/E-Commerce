import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="rating">⭐ {product.rating} ({product.reviews} reviews)</div>
      <p className="price">${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      <button onClick={() => onAddToWishlist(product)}>Add to Wishlist</button>
    </div>
  );
};

export default ProductCard;