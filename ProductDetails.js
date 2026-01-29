import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';

const ProductDetails = ({ addToCart, addToWishlist }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`).then((res) => {
      setProduct(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <div className="rating">⭐ {product.rating} ({product.reviews} reviews)</div>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
    </div>
  );
};

export default ProductDetails;