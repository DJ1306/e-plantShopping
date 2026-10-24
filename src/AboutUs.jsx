import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {
  Sprout,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Award,
  Sun,
  Droplets,
  ArrowRight,
  CheckCircle,
  Truck
} from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="about-page-wrapper">
      {/* Shared Navigation Bar */}
      <Navbar />

      <main className="about-main-container">
        {/* Hero Section */}
        <section className="about-hero-section">
          <div className="about-hero-badge">
            <Sprout size={16} />
            <span>Cultivating Joy &amp; Purity</span>
          </div>
          <h1 className="about-hero-title">About Paradise Nursery</h1>
          <p className="about-hero-lead">
            Where botanical passion meets modern homes. We are dedicated to connecting plant lovers with robust, nursery-grown houseplants that purify your air and elevate your sanctuary.
          </p>
        </section>

        {/* Company Introduction & Story Section */}
        <section className="about-story-section">
          <div className="about-story-grid">
            <div className="about-story-content">
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-title">Rooted in Passion for Living Greenery</h2>
              <p className="about-text-paragraph">
                Founded by lifelong botanists and indoor plant enthusiasts, <strong>Paradise Nursery</strong> began with a simple observation: modern indoor spaces often lack the rejuvenating calm and clean air that living plants naturally provide. What started as an artisanal greenhouse has flourished into a nationwide collective of master horticulturalists.
              </p>
              <p className="about-text-paragraph">
                We believe that every home—no matter how cozy or sunlit—deserves the timeless warmth of lush, thriving green leaves. From air-cleansing Snake Plants to fragrant Arabian Jasmine and forgiving ZZ Plants, each botanical specimen in our catalog is hand-selected to bring natural wellness into your everyday routine.
              </p>

              <div className="about-highlights-list">
                <div className="highlight-item">
                  <CheckCircle size={18} className="highlight-icon" />
                  <span>Sustainably grown in nutrient-dense organic soils</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle size={18} className="highlight-icon" />
                  <span>Individual health certified by master botanists</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle size={18} className="highlight-icon" />
                  <span>100% biodegradable insulated shipping cartons</span>
                </div>
              </div>
            </div>

            <div className="about-story-image-card">
              <img
                src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80"
                alt="Paradise Nursery botanical greenhouse"
                className="about-feature-img"
              />
              <div className="about-image-floating-badge">
                <Award size={24} className="badge-icon-gold" />
                <div>
                  <strong>Over 50,000+</strong>
                  <span>Homes Greener &amp; Brighter</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Core Values */}
        <section className="about-values-section">
          <div className="values-header">
            <span className="section-eyebrow">Our Botanical Philosophy</span>
            <h2 className="section-title">The Four Pillars of Paradise Nursery</h2>
            <p className="section-subtitle">
              Our unwavering commitment to botanical integrity, healthy plant lifecycles, and effortless customer satisfaction.
            </p>
          </div>

          <div className="values-grid">
            {/* Pillar 1: Commitment to Healthy Plants */}
            <div className="value-card">
              <div className="value-icon-box">
                <ShieldCheck size={28} />
              </div>
              <h3 className="value-title">Healthy Plant Commitment</h3>
              <p className="value-description">
                Every plant undergoes a rigorous 7-step health inspection before departure: robust root growth, pest-free certification, and balanced soil moisture. Backed by our 30-Day Healthy Thriving Guarantee.
              </p>
            </div>

            {/* Pillar 2: Mission */}
            <div className="value-card">
              <div className="value-icon-box">
                <Sprout size={28} />
              </div>
              <h3 className="value-title">Eco-Centric Mission</h3>
              <p className="value-description">
                Our mission is to foster harmonious indoor ecosystems. We utilize zero synthetic insecticides, prioritize peat-free potting mediums, and support reforestation initiatives with every checkout.
              </p>
            </div>

            {/* Pillar 3: Customer-Friendly Experience */}
            <div className="value-card">
              <div className="value-icon-box">
                <HeartHandshake size={28} />
              </div>
              <h3 className="value-title">Customer-First Care</h3>
              <p className="value-description">
                Shopping for plants should feel as relaxing as a walk through a garden. We provide personalized plant-matching, detailed care cards with every specimen, and 24/7 horticultural support.
              </p>
            </div>

            {/* Pillar 4: Insulated Safe Shipping */}
            <div className="value-card">
              <div className="value-icon-box">
                <Truck size={28} />
              </div>
              <h3 className="value-title">Climate-Safe Delivery</h3>
              <p className="value-description">
                Custom shock-absorbing and thermal-insulated packaging shields your plants from cold snaps and heat waves, delivering them in pristine nursery condition straight to your living room.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="about-cta-banner">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">Ready to Transform Your Living Space?</h2>
            <p className="cta-banner-text">
              Browse our curated collections of air-purifying, aromatic, and easy-care indoor foliage today.
            </p>
            <Link to="/plants" className="btn-primary-nature btn-cta-large">
              <span>Explore Our Plant Nursery</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
