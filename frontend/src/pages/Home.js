import React, { useEffect, useState, useCallback } from 'react';
import PlaceCard from '../components/PlaceCard';

const API = 'http://localhost:8000';

function Home() {
  const [places, setPlaces]               = useState([]);
  const [search, setSearch]               = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [loading, setLoading]             = useState(true);

  const fetchPlaces = useCallback(() => {
    const params = new URLSearchParams();
    if (appliedSearch) params.append('search', appliedSearch);
    setLoading(true);
    fetch(`${API}/places?${params}`)
      .then(r => r.json())
      .then(d => { setPlaces(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, [appliedSearch]);

  useEffect(() => { fetchPlaces(); }, [fetchPlaces]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    e.target.reset();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">Plan Your Perfect<br />Trip in Minutes</h1>
          <p className="hero-subtitle">
            Explore top destinations with affordable packages and hassle-free planning
          </p>
          <div className="hero-buttons">
            <button
              className="hero-btn hero-btn-primary"
              onClick={() => document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Travel Plan
            </button>
            <a href="#contact" className="hero-btn hero-btn-secondary">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <div className="trust-section">
        <div className="trust-stats">
          <div className="trust-stat">
            <span className="trust-number">⭐ 4.8</span>
            <span className="trust-label">Average Rating</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-stat">
            <span className="trust-number">1000+</span>
            <span className="trust-label">Happy Travelers</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-stat">
            <span className="trust-number">✔ Trusted</span>
            <span className="trust-label">Travel Experts</span>
          </div>
        </div>

        <div className="testimonials">
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">"Amazing experience, smooth booking from start to finish!"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">RS</div>
              <div>
                <span className="testimonial-name">Rahul Sharma</span>
                <span className="testimonial-trip">Kerala Tour</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">"Best travel agency I've used. Everything was perfectly organised."</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">PM</div>
              <div>
                <span className="testimonial-name">Priya Mehta</span>
                <span className="testimonial-trip">Bhutan Trip</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">"Affordable packages, helpful team, and zero stress. Highly recommend!"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">AK</div>
              <div>
                <span className="testimonial-name">Arjun Kumar</span>
                <span className="testimonial-trip">Sri Lanka Package</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <div id="destinations" className="section">
        <h2 className="section-title">Explore Destinations</h2>
        <p className="section-subtitle">Handpicked places from around the globe</p>
        <div className="simple-search">
          <input
            type="text"
            placeholder="Search destinations or countries..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && setAppliedSearch(search)}
          />
          <button onClick={() => setAppliedSearch(search)}>Search</button>
        </div>
        <p className="results-count">{places.length} destinations found</p>
        {loading ? (
          <p>Loading...</p>
        ) : places.length === 0 ? (
          <p style={{ color: '#888', marginTop: '20px' }}>No destinations found. Try a different search.</p>
        ) : (
          <div className="places-grid">
            {places.map(p => <PlaceCard key={p.id} place={p} />)}
          </div>
        )}
      </div>

      {/* Services Section */}
      <div className="section services-section">
        <div id="services" className="section services-section"></div>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Everything you need for the perfect trip</p>
        <div className="services-grid">
          <div className="service-card">
            <span className="service-icon">🗺️</span>
            <h3>Tour Packages</h3>
            <p>Carefully crafted packages with accommodation, transport, and guided tours included.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">✨</span>
            <h3>Custom Trips</h3>
            <p>Tell us your dream destination and budget — we'll plan every detail for you.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">🏨</span>
            <h3>Hotel Booking</h3>
            <p>Handpicked hotels from budget stays to luxury resorts at the best rates.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="section contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Planning a trip? Drop us a message and we'll get back to you within 24 hours.</p>
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <div className="contact-form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="e.g. Priya Sharma" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="e.g. priya@email.com" required />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Tell us about your travel plans..." rows="5" required></textarea>
          </div>
          <button type="submit" className="contact-submit-btn">Get Your Travel Plan</button>
        </form>
      </div>
    </div>
  );
}

export default Home;