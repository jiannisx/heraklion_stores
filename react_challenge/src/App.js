import React from 'react';
import Footer from './Footer';
import CardContainer from './CardContainer';
import { useSearch } from './SearchContext';
import './App.css';

function App() {
  const { searchKey } = useSearch();

  return (
    <>
      <Footer />
      <CardContainer searchQuery={searchKey} />
    </>
  );
}

export default App;
