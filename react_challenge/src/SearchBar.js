import React, { useState } from 'react';
import axios from 'axios';
import { setElements } from './globals';
import { useSearch } from './SearchContext';
import './SearchBar.css';


function SearchBar() {
  const [query, setQuery] = useState('');
  const { setSearchKey } = useSearch();

  const handleSearch = () => {
    if (query.trim() !== '') {
      setSearchKey(query);
      fetchDataAndCreateCards(query);
      setQuery('');
    }
  };

  const fetchDataAndCreateCards = async (searchQuery) => {
    try {
      const response = await axios.get('https://local-business-data.p.rapidapi.com/search-in-area', {
        headers: {
          'X-Rapidapi-Key': '2925e31e47mshb642e62939bdb2bp13809ajsn0fc8881a286b',
          'X-Rapidapi-Host': 'local-business-data.p.rapidapi.com'
        },
        params: {
          query: searchQuery,
          lat: '35.3387', // Latitude for Heraklion, Crete
          lng: '25.1442', // Longitude for Heraklion, Crete
          zoom: '13' // Zoom level
        }
      });

      // Extract the required data from the API response
      const extractedData = response.data.data.map(store => ({
        name: store.name,
        address: store.address,
        city: store.city,
        state: store.state,
        zip_code: store.zip_code,
        rating: store.rating
      }));

      setElements(extractedData, searchQuery); // Store the extracted data in a global variable
      document.dispatchEvent(new CustomEvent('dataFetched')); // Trigger an event to notify data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-bar"
        placeholder="Search for pizza, bar, etc..."
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;
