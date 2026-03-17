import React from 'react';

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Visiting Places</h1>
        <p>Your guide to the world's most beautiful destinations</p>
      </div>

      <div className="about-section">
        <h2>What is Visiting Places?</h2>
        <p>
          Visiting Places is a travel discovery platform that showcases over 20 handpicked
          destinations from around the globe. Whether you're looking for a relaxing beach getaway,
          a mountain adventure, or a cultural heritage experience, we help you explore the world
          from your screen.
        </p>
      </div>

      <div className="about-section">
        <h2>What You Can Do Here</h2>
        <div className="about-features">
          <div className="about-feature-card">
            <span className="feature-icon">🔍</span>
            <h3>Search</h3>
            <p>Find destinations by name or country instantly.</p>
          </div>
          <div className="about-feature-card">
            <span className="feature-icon">🗂️</span>
            <h3>Filter</h3>
            <p>Browse by category (Beach, Mountain, City, etc.) or region.</p>
          </div>
          <div className="about-feature-card">
            <span className="feature-icon">📍</span>
            <h3>Explore</h3>
            <p>View detailed info -- ratings, best season, entry fees, and more.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
