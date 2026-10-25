import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingBag, Sprout, Home, Info, Sparkles } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart?.items || []);
  
  // Dynamic total quantity calculation
  const totalQuantity = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <header className="navbar-header navbar">
      <nav className="navbar navbar-container" aria-label="Main Navigation">
        {/* Brand Section */}
        <Link to="/" className="navbar-brand">
          <div className="brand-icon-wrapper">
            <Sprout className="brand-leaf-icon" size={24} />
          </div>
          <div className="brand-text-group">
            <span className="brand-title">Paradise Nursery</span>
            <span className="brand-tagline">Where Greenery Meets Serenity</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            <Home size={16} />
            <span>Home</span>
          </Link>
          <Link
            to="/plants"
            className={`nav-link ${location.pathname === '/plants' ? 'active' : ''}`}
          >
            <Sparkles size={16} />
            <span>Plants</span>
          </Link>
          <Link
            to="/about"
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            <Info size={16} />
            <span>About Us</span>
          </Link>
        </div>

        {/* Cart Action Button with dynamic quantity count */}
        <div className="navbar-actions">
          <Link to="/cart" className="navbar-cart-btn" aria-label="View Shopping Cart">
            <div className="cart-icon-container">
              <ShoppingBag size={22} className="cart-svg-icon" />
              <span className="cart-badge cart_quantity_count" data-testid="cart-badge">
                {totalQuantity}
              </span>
            </div>
            <span className="cart-label">Cart</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
