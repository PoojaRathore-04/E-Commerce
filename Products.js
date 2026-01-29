import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = ({ addToCart, addToWishlist }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then((res) => {
      setProducts(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="products">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} onAddToWishlist={addToWishlist} />
        ))}
      </div>
    </div>
  );
};

export default Products;