import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API = 'http://localhost:8000';

function PlaceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    fetch(`${API}/places/${id}`)
      .then(r => r.json())
      .then(setPlace);
  }, [id]);

  if (!place) return <p>Loading...</p>;

  return (
    <div>
      <span className="back-btn" onClick={() => navigate(-1)}>← Back</span>
      <div className="place-detail">
        <img src={place.image_url} alt={place.name} />
        <div className="place-detail-body">
          <h1>{place.name}</h1>
          <span className="badge badge-category">{place.category}</span>
          <span className="badge badge-region">{place.region}</span>
          <p className="description">{place.description}</p>
          <div className="info-grid">
            <div className="info-item">
              <label>Country</label>
              <p>{place.country}</p>
            </div>
            <div className="info-item">
              <label>Rating</label>
              <p>★ {place.rating}</p>
            </div>
            <div className="info-item">
              <label>Best Season</label>
              <p>{place.best_season}</p>
            </div>
            <div className="info-item">
              <label>Entry Fee</label>
              <p>{place.entry_fee}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetail;