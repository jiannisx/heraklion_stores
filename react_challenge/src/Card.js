import React from 'react';
import './Card.css';

function Card({ store }) {
  return (
    <div className="card">
      <h3>{store.name}</h3>
      <p>{store.address}</p>
      <p>{store.city}, {store.state} {store.zip_code}</p>
      <p>Rating: {store.rating}</p>
    </div>
  );
}

export default Card;
