import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchKey, setsearchKey] = useState('');

  const setSearchKey = (newSearch) => {
    setsearchKey(newSearch);
  };

  // eslint-disable-next-line no-unused-vars
  const getSearchKey = () => {
    return searchKey;
  };

  return (
    <SearchContext.Provider value={{ searchKey, setSearchKey }}>
      {children}
    </SearchContext.Provider>
  );
};
