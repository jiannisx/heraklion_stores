import React, { useState, useEffect } from 'react';
import { getElements } from './globals';
import Card from './Card';
import './CardContainer.css';


function CardContainer({ searchQuery }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const elements = await getElements(searchQuery);
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

  console.log(searchQuery);
  if(data == null || searchQuery === '' || (Array.isArray(data) && data.length === 0)) {
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
              <Card key={index} store={store} />
            ))
          ) : (
            <Card key={searchQuery} store={data} />
          )}
        </div>
      </div>
    );
  }
  
}

export default CardContainer;
