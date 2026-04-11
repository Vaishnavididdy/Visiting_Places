import React from 'react';
import { useNavigate } from 'react-router-dom';

const PRICES = [
  '2-Day Tour Package from ₹4,999',
  '3-Day Tour Package from ₹7,499',
  '4-Day Tour Package from ₹10,999',
  '5-Day Tour Package from ₹13,999',
  'Weekend Package from ₹5,999',
  'Budget Package from ₹3,499',
];

function getPrice(id) {
  return PRICES[id % PRICES.length];
}

function PlaceCard({ place }) {
  const navigate = useNavigate();
  return (
    <div className="place-card">
      <img src={place.image_url} alt={place.name} />
      <div className="place-card-body">
        <div className="place-card-badges">
          <span className="badge badge-category">{place.category}</span>
          <span className="badge badge-region">{place.region}</span>
        </div>
        <h3>{place.name}</h3>
        <p className="place-country">📍 {place.country}</p>
        <p className="place-desc">{place.description.slice(0, 80)}...</p>
        <p className="place-price">{getPrice(place.id)}</p>
        <div className="place-card-footer">
          <span className="rating">★ {place.rating}</span>
          <button className="view-details-btn" onClick={() => navigate(`/place/${place.id}`)}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;