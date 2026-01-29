import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>E-Commerce</h3>
          <p>Your one-stop shop for the best deals.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/wishlist">Wishlist</a></li>
            <li><a href="/orders">Orders</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#facebook">📘</a>
            <a href="#twitter">🐦</a>
            <a href="#instagram">📷</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
