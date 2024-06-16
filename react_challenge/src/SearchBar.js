import React, { useState } from 'react';
import { setSearch, getSearch } from './globals';
import './SearchBar.css';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');

  const handleSearch = () => {
    setSearch(query);
    if (getSearch().trim() === '') {
      setResults('Please enter a search query.');
    } else {
      setResults(`You searched for: ${getSearch()}`);
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
      <div className="results">{results}</div>
    </div>
  );
}

export default SearchBar;