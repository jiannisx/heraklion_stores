import React, { useState } from 'react';
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
      // Fetch data from the API (replace 'your_api_endpoint' with the actual endpoint)
      // const response = await fetch(`your_api_endpoint?q=${searchQuery}`);
      // const data = await response.json();
      // Assuming 'data' is an array of items, create cards
      setElements('Hello', searchQuery); // Store the search results in a global variable
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
        placeholder="Search..."
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;
