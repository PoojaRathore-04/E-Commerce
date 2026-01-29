import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

const Navbar = ({ user, cartCount }) => {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleSearch = async () => {
    if (!search.trim()) return;

    try {
      const res = await axios.get(
        `http://localhost:5000/api/products?search=${search}`
      );

      if (res.data.length > 0) {
        navigate(`/product/${res.data[0]._id}`);
        setSearch('');
      } else {
        alert('Product not found');
      }
    } catch (err) {
      alert('Server error');
    }
  };
  
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          <img src="data:image/jpeg;base64,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" alt="ecommerce" />
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Search for products..." value={search} onChange={(e) => setSearch(e.target.value)}onKeyDown={(e) => e.key === 'Enter' && handleSearch()} />
          <button>🔍</button>
        </div>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <div className={`nav-right ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-button">Home</Link>  
        <Link to="/products" className="nav-button">Products</Link>
        <Link to="/cart" className="nav-button">Cart ({cartCount})</Link>
        <Link to="/wishlist" className="nav-button">Wishlist</Link>
        <Link to="/orders" className="nav-button">Orders</Link>
        {user ? <span className='nav-button'> {user.name}</span> : <Link to="/login" className="nav-button">Login</Link>}
        <Link />
      </div>
    </nav>
  );
};

export default Navbar;