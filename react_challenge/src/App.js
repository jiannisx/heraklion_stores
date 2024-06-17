import React, { useState } from 'react';
import Footer from './Footer';
import CardContainer from './CardContainer';
import DetailedCard from './DetailedCard';
import { useSearch } from './SearchContext';
import './App.css';

function App() {
  const { searchKey } = useSearch();
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (store) => {
    setSelectedCard(store);
  };

  const handleBackClick = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <Footer />
      {selectedCard ? (
        <DetailedCard store={selectedCard} onBackClick={handleBackClick} />
      ) : (
        <CardContainer searchQuery={searchKey} onCardClick={handleCardClick} />
      )}
    </>
  );
}

export default App;
