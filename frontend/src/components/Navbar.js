import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-icon">🌍</span>
        <span className="brand-text">Visiting Places</span>
      </Link>
      <div className="navbar-links">
        <a href="#top" className="nav-link" onClick={scrollToTop}>Home</a>
        <a href="#destinations" className="nav-link">Destinations</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;