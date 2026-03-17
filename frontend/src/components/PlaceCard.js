import React from 'react';
import { Link } from 'react-router-dom';

function PlaceCard({ place }) {
  return (
    <Link to={`/place/${place.id}`} className="place-card">
      <img src={place.image_url} alt={place.name} />
      <div className="place-card-body">
        <h3>{place.name}</h3>
        <p className="country">{place.country}</p>
        <span className="badge badge-category">{place.category}</span>
        <span className="badge badge-region">{place.region}</span>
        <p className="rating">★ {place.rating}</p>
      </div>
    </Link>
  );
}

export default PlaceCard;
