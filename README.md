# e-plantShopping — Paradise Nursery Shopping Application

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-purple.svg)](https://vitejs.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2-purple.svg)](https://redux-toolkit.js.org/)
[![Status](https://img.shields.io/badge/Status-Complete%20%26%20Tested-brightgreen.svg)]()

**e-plantShopping** is a modern, responsive plant shopping web application crafted for **Paradise Nursery Shopping Application** with **React 18**, **Redux Toolkit**, and **Vite**. Built as part of the Coursera / IBM Front-End Developer Capstone Project.

---

## 🌿 Project Overview

**Paradise Nursery** is an artisanal online botanical sanctuary dedicated to bringing fresh, vibrant greenery into homes and workspaces. The application allows users to explore a catalog of hand-selected houseplants organized into curated categories (Air Purifying, Aromatic & Fragrant, and Low Maintenance), learn about plant care and our mission, manage an interactive shopping cart with Redux state management, and proceed to checkout.

---

## ✨ Features

- **Interactive Botanical Landing Page (`App.jsx`)**
  - Scenic full-screen plant and nature background imagery with high-contrast readable overlay.
  - Welcoming company introduction and tagline: *"Where Greenery Meets Serenity"*.
  - Prominent **Get Started** call-to-action button linking directly to the product catalog.
  - Direct links to **About Us** and dynamic Cart navigation.
- **Curated Plant Catalog (`ProductList.jsx`)**
  - Organized into **3 distinct categories**:
    1. *Air Purifying Plants* (Snake Plant, Spider Plant, Peace Lily, Boston Fern, English Ivy, Aloe Vera)
    2. *Aromatic & Fragrant Plants* (Lavender, Rosemary, Peppermint, Lemon Balm, Arabian Jasmine, Sweet Basil)
    3. *Low Maintenance & Hardy Plants* (ZZ Plant, Golden Pothos, Cast Iron Plant, Jade Plant, Rubber Plant, Monstera Deliciosa)
  - **18 unique products** with real botanical imagery, prices, descriptions, and category tags.
  - **Add to Cart** functionality with instantaneous button state changes to **Added to Cart** (disabled) when present in the cart.
- **Centralized Redux Cart Management (`CartSlice.jsx`)**
  - Uses Redux Toolkit `createSlice` to manage global cart items.
  - Implements `addItem`, `removeItem`, and `updateQuantity` reducers.
  - Protected decrement action: quantities never fall below 1.
  - Real-time dynamic cart icon quantity badge in the navigation bar.
- **Comprehensive Shopping Cart Page (`CartItem.jsx`)**
  - Displays item thumbnail, name, unit price, quantity stepper, and dynamic line item totals.
  - Increase (`+`) and Decrease (`-`) quantity controls with protected minimum constraint of 1.
  - Delete button that dispatches `removeItem` to clear plants from cart.
  - Automatically calculated line subtotals and grand order total.
  - **Continue Shopping** button seamlessly directing back to the product catalog.
  - **Proceed to Checkout** action showing an informative *"Coming Soon!"* dialog without charging the user.
  - Polished empty-cart message and call-to-action when cart contains 0 items.
- **Company Story & Mission (`AboutUs.jsx`)**
  - Company background, mission statement, 7-step healthy plant commitment, and customer-first care philosophy.
  - Core values grid highlighting sustainable practices, insulated shipping, and 30-day guarantee.
- **Botanical Luxury Design System (`App.css`)**
  - Custom color palette: deep forest green, sage, mint, warm cream, and gold accents.
  - Modern typography pairing Playfair Display and Plus Jakarta Sans.
  - Fully responsive across desktop, tablet, and mobile screens.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Declarative Component-Driven UI |
| **Vite 6** | High-performance build tool and dev server |
| **Redux Toolkit** | Centralized, predictable application state management |
| **React Redux** | Official React bindings for Redux |
| **React Router DOM 6** | Client-side routing between Home, Plants, Cart, and About Us |
| **Lucide React** | Crisp, modern botanical and interface SVG icons |
| **Vanilla CSS3** | Custom design system with glassmorphism, flexbox, and CSS Grid |

---

## 📁 Project Structure

```
paradise-nursery/
├── README.md              # Project documentation and setup guide
├── package.json           # Dependencies and project scripts
├── vite.config.js         # Vite configuration with React plugin
├── index.html             # Main HTML entry with Google fonts & metadata
├── .gitignore             # Git ignore configuration
└── src/
    ├── main.jsx           # App mounting with Redux Provider & Router
    ├── store.js           # Redux Toolkit store configuration
    ├── App.jsx            # Landing page and root routing
    ├── App.css            # Complete application styling
    ├── AboutUs.jsx        # Company story, mission, and values
    ├── ProductList.jsx    # 18 plant products across 3 categories
    ├── CartItem.jsx       # Cart view with totals and checkout modal
    ├── CartSlice.jsx      # Redux slice with addItem, removeItem, updateQuantity
    └── Navbar.jsx         # Reusable navigation bar with dynamic cart count
```

---

## 🚀 Installation & Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0 or higher recommended, tested on v24)
- npm (v8.0 or higher)

### Step 1: Clone or Navigate to the Repository
```bash
git clone <your-repository-url>
cd paradise-nursery
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run the Application Locally
```bash
npm run dev
```

Open your browser and navigate to the local server URL displayed in your terminal (typically `http://localhost:5173`).

### Step 4: Build for Production
To create an optimized production bundle:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📝 Assignment Submission URLs Reference

For Coursera project grading, submit the direct GitHub URLs to the following required project files in the `e-plantShopping` repository:

1. **`README.md`**: `https://github.com/DJ1306/e-plantShopping/blob/main/README.md`
2. **`src/AboutUs.jsx`**: `https://github.com/DJ1306/e-plantShopping/blob/main/src/AboutUs.jsx`
3. **`src/App.css`**: `https://github.com/DJ1306/e-plantShopping/blob/main/src/App.css`
4. **`src/App.jsx`**: `https://github.com/DJ1306/e-plantShopping/blob/main/src/App.jsx`
5. **`src/CartSlice.jsx`**: `https://github.com/DJ1306/e-plantShopping/blob/main/src/CartSlice.jsx`
6. **`src/ProductList.jsx`**: `https://github.com/DJ1306/e-plantShopping/blob/main/src/ProductList.jsx`
7. **`src/CartItem.jsx`**: `https://github.com/DJ1306/e-plantShopping/blob/main/src/CartItem.jsx`

Additional state and root files:
- **`src/store.js`**: `https://github.com/DJ1306/e-plantShopping/blob/main/src/store.js`
- **`src/main.jsx`**: `https://github.com/DJ1306/e-plantShopping/blob/main/src/main.jsx`

---

## 📄 License
This project is developed for educational purposes as part of the Coursera Front-End Specialization.
