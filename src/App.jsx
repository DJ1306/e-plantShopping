import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import {
  Sprout,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
  Heart,
  Wind,
  Flower2,
  Info
} from 'lucide-react';
import { useSelector } from 'react-redux';

export function LandingPage() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart?.items || []);
  const totalQuantity = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);

  const handleGetStarted = () => {
    navigate('/plants');
  };
  const handleGetStartedClick = handleGetStarted;

  return (
    <div className="landing-page-hero landing-page">
      {/* Background Overlay */}
      <div className="landing-overlay background-image" />

      {/* Top Floating Glass Navigation Header */}
      <header className="landing-nav-header">
        <div className="landing-nav-inner">
          <Link to="/" className="landing-brand-link">
            <div className="landing-brand-icon">
              <Sprout size={26} />
            </div>
            <div className="landing-brand-text">
              <span className="brand-name">Paradise Nursery</span>
              <span className="brand-tag">Where Greenery Meets Serenity</span>
            </div>
          </Link>

          <nav className="landing-nav-links">
            <Link to="/about" className="landing-link">
              <Info size={16} />
              <span>About Us</span>
            </Link>
            <Link to="/plants" className="landing-link">
              <Sparkles size={16} />
              <span>Browse Plants</span>
            </Link>
            <Link to="/cart" className="landing-cart-pill" aria-label="Cart">
              <span>Cart</span>
              <span className="landing-cart-count cart_quantity_count">{totalQuantity}</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Main Content */}
      <main className="landing-hero-center">
        <div className="landing-content-card landing_content content">
          <div className="landing-badge-pill">
            <Sparkles size={16} />
            <span>Welcome to Nature's Embrace</span>
          </div>

          <h1 className="landing-main-title">Paradise Nursery</h1>
          <div className="divider" style={{ width: '60px', height: '3px', background: 'var(--color-gold-accent)', margin: '0.8rem auto 1.2rem', borderRadius: '2px' }} />

          <p className="landing-welcome-message">
            Where Greenery Meets Serenity. Welcome to <strong>Paradise Nursery</strong>, your premier online botanical destination. We hand-select, nurture, and deliver thriving houseplants directly to your doorstep—bringing fresh air, vitality, and tranquility into every corner of your home.
          </p>

          <p className="landing-description-sub">
            Whether you seek natural air-purifying foliage, enchanting aromatic herbs, or resilient low-maintenance succulents, our botanist-curated nursery is cultivated to help your living spaces flourish.
          </p>

          {/* Primary Action Buttons */}
          <div className="landing-cta-group">
            <button
              type="button"
              id="get-started-btn"
              className="btn-get-started get-started-button"
              onClick={handleGetStartedClick}
            >
              <span>Get Started</span>
              <ArrowRight size={20} className="cta-arrow-icon" />
            </button>

            <Link to="/about" className="btn-landing-about">
              <span>Our Story &amp; Mission</span>
            </Link>
          </div>

          {/* Value Highlights */}
          <div className="landing-feature-pills">
            <div className="feature-pill-item">
              <Wind size={18} className="pill-icon" />
              <span>Air Purifying</span>
            </div>
            <div className="feature-pill-item">
              <Flower2 size={18} className="pill-icon" />
              <span>Aromatic Flora</span>
            </div>
            <div className="feature-pill-item">
              <ShieldCheck size={18} className="pill-icon" />
              <span>30-Day Guarantee</span>
            </div>
            <div className="feature-pill-item">
              <Truck size={18} className="pill-icon" />
              <span>Insulated Shipping</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer minimal tag */}
      <footer className="landing-footer-bar">
        <p>&copy; {new Date().getFullYear()} Paradise Nursery Shopping Application. Cultivated with care for plant lovers everywhere.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-root-container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}
