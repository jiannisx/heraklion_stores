import React from 'react';
import './Card.css';

function Card({ store, onClick }) {
  return (
    <button className="card" onClick={() => onClick(store)}>
      <h3>{store.name}</h3>
      <p>{store.address}</p>
      <p>{store.city}, {store.state} {store.zip_code}</p>
      <p>Rating: {store.rating}</p>
    </button>
  );
}

export default Card;
