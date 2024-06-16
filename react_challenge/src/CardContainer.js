import React, { useState, useEffect } from 'react';
import { getElements } from './globals';
import { useSearch } from './SearchContext';
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
          {(Array.isArray(data)) ? ( // Check if data is an array
              data.map((item) => (
                <Card key={item.id} title={item.title} description={item.description} />
              ))
          ) : ( // If data is not an array (assume it's a single object or element)
            <Card key={data} title={data} description={data} />
          )}
      </div>
    );
  }
  
}

export default CardContainer;
