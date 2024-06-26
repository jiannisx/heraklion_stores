import React, { useState, useEffect } from 'react';
import { queryAnswersGet } from './queryAnswers';
import Card from './Card';
import './CardContainer.css';

function CardContainer({ searchQuery, onCardClick }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const elements = await queryAnswersGet(searchQuery);
        setData(elements || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      }
    };

    fetchData();

    const handleDataFetched = () => {
      fetchData();
    };

    // Listen for the custom event to update the state
    document.addEventListener('dataFetched', handleDataFetched);

    // Cleanup event listener
    return () => {
      document.removeEventListener('dataFetched', handleDataFetched);
    };
  }, [searchQuery]);

  if (data == null || searchQuery === '' || (Array.isArray(data) && data.length === 0)) {
    return (
      <div id="card-container" className="card-container">
        <p>No data available</p>
      </div>
    );
  }
  else {
    return (
      <div id="card-container" className="card-container">
        <p>Current Search: {searchQuery}</p>
        <div className="card-grid">
          {Array.isArray(data) ? (
            data.map((store, index) => (
              <Card key={index} store={store} onClick={onCardClick} />
            ))
          ) : (
            <Card key={searchQuery} store={data} onClick={onCardClick} />
          )}
        </div>
      </div>
    );
  }
}

export default CardContainer;
