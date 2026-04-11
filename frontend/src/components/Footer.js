import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>🌍 Visiting Places</h3>
          <p>Your trusted travel partner for discovering the world's most beautiful destinations. We make every trip memorable.</p>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📧 hello@visitingplaces.com</p>
          <p>📞 +91 1234567890</p>
          <p>📍 Bangalore, India</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" target="_blank" rel="noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Visiting Places. All rights reserved. | Made with ❤️ for travelers</p>
      </div>
    </footer>
  );
}

export default Footer;