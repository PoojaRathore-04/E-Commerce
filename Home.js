import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import ProductSlider from '../components/ProductSlider';
import './Home.css';

const Home = ({ addToCart, addToWishlist }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const categories = ['Electronics', 'Fashion', 'Home', 'Books'];
  const [selectedCategory, setSelectedCategory] = useState('All');


  const filteredProducts =
  selectedCategory === 'All'
    ? products
    : products.filter(
        (product) =>
          product.category?.toLowerCase() === selectedCategory.toLowerCase()
      );

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then((res) => {
      setProducts(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="home">
      <ProductSlider products={products.slice(0)} />
      <div className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
     <div
        className={`category-card ${selectedCategory === 'All' ? 'active' : ''}`}
        onClick={() => setSelectedCategory('All')}
     >
       All
     </div>

  {categories.map((cat) => (
    <div
      key={cat}
      className={`category-card ${selectedCategory === cat ? 'active' : ''}`}
      onClick={() => setSelectedCategory(cat)}
    >
      {cat}
    </div>
  ))}
</div>

      </div>
      <h2>Featured Products</h2>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} onAddToWishlist={addToWishlist} />
        ))}
      </div>
    </div>
  );
};

export default Home;