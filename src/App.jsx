import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import { selectTotalQuantity } from './redux/CartSlice.jsx';
import './App.css';

function Navigation() {
  const cartCount = useSelector(selectTotalQuantity);
  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Paradise Nursery home">
        <span className="brand-mark" aria-hidden="true">✿</span>
        <span>paradise<span className="brand-light"> nursery</span></span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Shop plants</NavLink>
        <NavLink to="/about">Our story</NavLink>
        <NavLink className="nav-cart" to="/cart">
          Cart <span className="nav-cart-count">{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <main className="home-page">
      <section className="landing-hero">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Bring the outdoors in</p>
          <h1>Find your little<br />piece of <em>paradise.</em></h1>
          <p className="hero-description">
            Thoughtfully chosen houseplants to make your home feel calmer, brighter, and more alive.
          </p>
          <Link className="button button-light" to="/products">Get Started <span aria-hidden="true">→</span></Link>
          <div className="hero-note"><span aria-hidden="true">✦</span> A happier home starts with a little green.</div>
        </div>
        <div className="hero-caption">GROW A LITTLE JOY, EVERY DAY</div>
      </section>
      <section className="home-intro">
        <div>
          <p className="eyebrow">Welcome to Paradise Nursery</p>
          <h2>Good things grow here.</h2>
        </div>
        <p>From easy-care favorites to leafy statement plants, find the right green companion for your space and your pace.</p>
        <Link to="/products" className="text-link">Explore the collection <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  );
}

function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">A little off the path</p>
      <h1>We couldn't find that page.</h1>
      <Link className="button button-primary" to="/">Back to home</Link>
    </main>
  );
}

function App() {
  return (
    <div className="app-shell">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="site-footer">
        <Link to="/" className="footer-brand">paradise nursery</Link>
        <span>Grow a little joy, every day.</span>
        <span>© {new Date().getFullYear()} Paradise Nursery</span>
      </footer>
    </div>
  );
}

export default App;
