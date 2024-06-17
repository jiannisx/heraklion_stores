import React from 'react';
import Title from './Title';
import SearchBar from './SearchBar';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="title">
        <Title />
      </div>
      <div className="search-bar">
        <SearchBar />
      </div>
    </div>
  );
}

export default Footer;
