import React from 'react';
import './DetailedCard.css';

function DetailedCard({ store, onBackClick }) {
  return (
    <div className="detailed-card">
      <button className="back-button" onClick={onBackClick}>&larr;</button>
      <h2>{store.name}</h2>
      <p>{store.address}</p>
      <p>{store.city}, {store.state} {store.zipcode}</p>
      <p>Rating: {store.rating}</p>
      <p>Review Count: {store.review_count}</p>
      <p>Phone Number: {store.phone_number}</p>
      <p>Website: <a href={store.website} target="_blank" rel="noopener noreferrer">{store.website}</a></p>
      <p>Operating Hours:</p>
      <ul>
        {Object.keys(store.working_hours).map(day => (
          <li key={day}>{day}: {store.working_hours[day].join(', ')}</li>
        ))}
      </ul>
      <p>About:</p>
      <p>{store.about.summary}</p>
      <p>Photos:</p>
      <ul>
        {store.photos_sample.map(photo => (
          <li key={photo.photo_id}>
            <img src={photo.photo_url} alt="Sample" style={{ width: '100px', height: 'auto', marginRight: '10px' }} />
            <a href={photo.photo_url_large} target="_blank" rel="noopener noreferrer">View Large</a>
          </li>
        ))}
      </ul>
      <p>Reviews per Rating:</p>
      <ul>
        {Object.keys(store.reviews_per_rating).map(rating => (
          <li key={rating}>{rating} stars: {store.reviews_per_rating[rating]}</li>
        ))}
      </ul>
    </div>
  );
}

export default DetailedCard;
