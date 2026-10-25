import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import {
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ShoppingBag,
  Sparkles,
  CheckCircle2,
  X,
  CreditCard,
  ShieldCheck,
  Truck
} from 'lucide-react';

const FALLBACK_PLANT_IMAGE = "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80";

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart?.items || []);
  const cart = cartItems;
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  // Dynamic calculations
  const totalQuantity = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);

  // Helper to extract numeric unit price safely from either numeric price or formatted string cost
  const getItemUnitPrice = (item) => {
    if (typeof item.price === 'number' && !isNaN(item.price)) {
      return item.price;
    }
    const parsed = parseFloat(String(item.cost || item.price || '0').replace(/[^0-9.]/g, ''));
    return isNaN(parsed) ? 0 : parsed;
  };

  // Grand total calculation for all items in cart
  const calculateTotalAmount = () => {
    const total = cart.reduce(
      (sum, item) => sum + getItemUnitPrice(item) * (item.quantity || 0),
      0
    );
    return total.toFixed(2);
  };

  // Line item total calculation (Unit Price × Quantity)
  const calculateTotalCost = (item) => {
    const cost = getItemUnitPrice(item) * (item.quantity || 0);
    return cost.toFixed(2);
  };

  // Quantity increase - calls updateQuantity with quantity + 1
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  // Quantity decrease - decrements by 1, removes item if quantity reaches 0
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          name: item.name,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.id ?? item.name));
    }
  };

  // Delete item completely from cart using removeItem
  const handleRemove = (item) => {
    dispatch(removeItem(item.id ?? item.name));
  };

  // Continue shopping navigation (supports both router and prop callback)
  const handleContinueShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping(e);
    } else {
      navigate('/plants');
    }
  };

  // Checkout action - triggers Coursera expected alert and shows informative modal
  const handleCheckoutShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    alert('Functionality to be added for future reference');
    setShowCheckoutModal(true);
  };

  return (
    <div className="cart-page-wrapper cart-container">
      {/* Shared Navigation Bar */}
      <Navbar />

      <main className="cart-main-container">
        {/* Page Title & Breadcrumb */}
        <div className="cart-page-header">
          <button
            type="button"
            className="btn-back-link"
            onClick={handleContinueShopping}
          >
            <ArrowLeft size={18} />
            <span>Continue Shopping</span>
          </button>
          <h1 className="cart-page-title">Your Plant Cart</h1>
          <p className="cart-page-subtitle">
            Review your selected houseplants, adjust quantities, or proceed to checkout.
          </p>
        </div>

        {/* Empty Cart State */}
        {cart.length === 0 ? (
          <section className="empty-cart-card">
            <div className="empty-cart-icon-wrapper">
              <ShoppingBag size={48} className="empty-bag-icon" />
            </div>
            <h2 className="empty-cart-heading">Your Plant Cart is Empty</h2>
            <p className="empty-cart-description">
              Looks like you haven't welcomed any leafy companions into your cart yet. Explore our curated nursery of air-purifying, aromatic, and hardy indoor plants!
            </p>
            <button
              type="button"
              className="btn-primary-nature"
              onClick={handleContinueShopping}
            >
              <Sparkles size={18} />
              <span>Explore Our Plants</span>
            </button>
          </section>
        ) : (
          /* Cart Content Layout: Items List + Order Summary */
          <div className="cart-grid-layout">
            {/* Items Column */}
            <section className="cart-items-column" aria-label="Shopping Cart Items">
              <div className="cart-items-header-bar">
                <span>Item Details</span>
                <span className="cart-header-qty">Quantity</span>
                <span className="cart-header-subtotal">Subtotal</span>
              </div>

              <div className="cart-items-list">
                {cart.map((item) => (
                  <article key={item.id || item.name} className="cart-item-card">
                    {/* Item Thumbnail */}
                    <div className="cart-item-media">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-thumbnail"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = FALLBACK_PLANT_IMAGE;
                        }}
                      />
                    </div>

                    {/* Item Details */}
                    <div className="cart-item-info">
                      <span className="cart-item-category">{item.category}</span>
                      <h2 className="cart-item-name">{item.name}</h2>
                      <div className="cart-item-unit-price">
                        Unit Price: <strong>${Number(item.price).toFixed(2)}</strong>
                      </div>

                      {/* Delete Button (Mobile) */}
                      <button
                        type="button"
                        className="btn-remove-item cart-item-delete mobile-only"
                        onClick={() => handleRemove(item)}
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <Trash2 size={16} />
                        <span>Remove</span>
                      </button>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="cart-item-quantity-stepper">
                      <button
                        type="button"
                        className="btn-stepper btn-decrement cart-item-button cart-item-button-dec"
                        onClick={() => handleDecrement(item)}
                        aria-label={`Decrease quantity of ${item.name}`}
                        title={item.quantity <= 1 ? "Remove plant from cart" : "Decrease quantity"}
                      >
                        <Minus size={15} />
                      </button>
                      
                      <span className="stepper-quantity-value cart-item-quantity-value" aria-label={`Quantity: ${item.quantity}`}>
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        className="btn-stepper btn-increment cart-item-button cart-item-button-inc"
                        onClick={() => handleIncrement(item)}
                        aria-label={`Increase quantity of ${item.name}`}
                        title="Increase quantity"
                      >
                        <Plus size={15} />
                      </button>
                    </div>

                    {/* Line Total */}
                    <div className="cart-item-total">
                      <span className="line-total-amount">
                        ${calculateTotalCost(item)}
                      </span>
                    </div>

                    {/* Delete Button (Desktop) */}
                    <button
                      type="button"
                      className="btn-remove-item cart-item-delete desktop-only"
                      onClick={() => handleRemove(item)}
                      aria-label={`Remove ${item.name} from cart`}
                      title="Remove plant"
                    >
                      <Trash2 size={18} />
                    </button>
                  </article>
                ))}
              </div>

              {/* Action Links Below Cart List */}
              <div className="cart-actions-bottom continue_shopping_btn">
                <button
                  type="button"
                  className="btn-secondary-nature get-started-button"
                  onClick={handleContinueShopping}
                >
                  <ArrowLeft size={16} />
                  <span>Continue Shopping</span>
                </button>
              </div>
            </section>

            {/* Order Summary Column */}
            <aside className="cart-summary-sidebar" aria-label="Order Summary">
              <div className="cart-summary-card">
                <h2 className="summary-title">Order Summary</h2>

                <div className="summary-row">
                  <span>Total Plant Types:</span>
                  <strong>{cartItems.length}</strong>
                </div>

                <div className="summary-row">
                  <span>Total Plant Count:</span>
                  <strong>{totalQuantity}</strong>
                </div>

                <div className="summary-row">
                  <span>Estimated Nursery Delivery:</span>
                  <span className="free-shipping-tag">FREE</span>
                </div>

                <div className="summary-divider" />

                <div className="summary-total-row">
                  <span className="grand-total-label">Grand Total:</span>
                  <span className="grand-total-amount">
                    ${calculateTotalAmount()}
                  </span>
                </div>

                {/* Checkout Button */}
                <button
                  type="button"
                  className="btn-primary-nature btn-checkout-action get-started-button1"
                  onClick={handleCheckoutShopping}
                >
                  <CreditCard size={18} />
                  <span>Proceed to Checkout</span>
                </button>

                <button
                  type="button"
                  className="btn-secondary-nature btn-summary-continue"
                  onClick={handleContinueShopping}
                >
                  <span>Add More Plants</span>
                </button>

                {/* Trust Badges */}
                <div className="summary-trust-badges">
                  <div className="trust-badge-item">
                    <ShieldCheck size={16} className="trust-icon" />
                    <span>30-Day Healthy Guarantee</span>
                  </div>
                  <div className="trust-badge-item">
                    <Truck size={16} className="trust-icon" />
                    <span>Insulated Eco-Friendly Box</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>

      {/* Checkout Coming Soon Modal */}
      {showCheckoutModal && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal-dialog-card">
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setShowCheckoutModal(false)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="modal-icon-wrapper">
              <CheckCircle2 size={44} className="modal-check-icon" />
            </div>

            <h3 className="modal-heading">Checkout Coming Soon!</h3>
            <p className="modal-body-text">
              Thank you for exploring <strong>Paradise Nursery</strong>! Our secure payment gateway and botanical delivery logistics are currently undergoing final testing.
            </p>
            <p className="modal-subtext">
              Total Order Amount: <strong>${calculateTotalAmount()}</strong> for {totalQuantity} plant(s). No charge has been processed.
            </p>

            <div className="modal-footer-actions">
              <button
                type="button"
                className="btn-primary-nature"
                onClick={() => setShowCheckoutModal(false)}
              >
                Got It, Thank You!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
