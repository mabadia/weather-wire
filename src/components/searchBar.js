import React, { useState } from 'react';

function SearchBar({ updateWeatherData }) {
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = () => {
    //Ensure the location is not empty
    if (location.trim() !== '') {
      setError(null); //Clear any previous errors
      updateWeatherData(location);
    } else {
      setError('Please enter a location.'); //Show an error if the location is empty
    }
  };

  return (
    <div className='searchBar'>
      <input
        type='text'
        className='location'
        placeholder='Search'b 
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>SEARCH</button>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default SearchBar;
