import React, { useState } from 'react';
import axios from 'axios';
import { setElements, elementsHasKey } from './globals';
import { useSearch } from './SearchContext';
import './SearchBar.css';

//function getTestData() {
//  return [
//    {
//      name: "Silfio",
//      address: "Leof. Dimokratias 73, Iraklio 713 06, Greece",
//      city: "Heraklion",
//      rating: 4.6
//    },
//    {
//      name: "Red Corner",
//      address: "Leof. Knosou, Knosos 714 09, Greece",
//      city: "Knossos",
//      rating: 4.2
//    },
//    {
//      name: "Pizza Fan Ηράκλειο Κρήτης 2",
//      address: "Leof. Papanastasiou 89, Iraklio 714 09, Greece",
//      city: "Heraklion",
//      rating: 3.5
//    },
//    // Add more entries as needed
//  ];
//}

function SearchBar() {
  const [query, setQuery] = useState('');
  const { setSearchKey } = useSearch();

  const handleSearch = () => {
    if (query.trim() !== '') {
      setSearchKey(query.trim());
      fetchDataAndCreateCards(query.trim());
      setQuery('');
    }
  };

  const fetchDataAndCreateCards = async (searchQuery) => {
    try {
      console.log(elementsHasKey(searchQuery.trim()));
      if(!elementsHasKey(searchQuery.trim())) {
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
//        const extractedData = getTestData();

        setElements(extractedData, searchQuery.trim()); // Store the extracted data in a global variable
        document.dispatchEvent(new CustomEvent('dataFetched')); // Trigger an event to notify data is fetched
      }
      else {
        console.log("exists");
      }

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
