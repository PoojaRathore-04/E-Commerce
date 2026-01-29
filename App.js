import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Orders from './pages/Orders';
import Login from './pages/Login';

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const addToCart = (product) => setCart([...cart, product]);
  const addToWishlist = (product) => setWishlist([...wishlist, product]);
  const placeOrder = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    localStorage.setItem('orders', JSON.stringify([...orders, { id: Date.now(), items: cart, total: cart.reduce((sum, p) => sum + p.price, 0) }]));
    setCart([]);
  };

  return (
    <Router>
      <Navbar user={user} cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} addToWishlist={addToWishlist} />} />
        <Route path="/products" element={<Products addToCart={addToCart} addToWishlist={addToWishlist} />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} addToWishlist={addToWishlist} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} placeOrder={placeOrder} />} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;