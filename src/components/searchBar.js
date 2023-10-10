import React, { useState } from 'react';
import { fetchCoordinates } from './path-to-fetchCoordinates';


function SearchBar({ updateLocation, updateCoordinates }) {
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      // Fetch coordinates for the entered location
      const coordinates = await fetchCoordinates(location);

      // Update the location and coordinates in the parent component
      updateLocation(location);
      updateCoordinates(coordinates);
      // Clear any existing error
      setError(null);
    } catch (error) {
      console.error('Error fetching coordinates:', error);
      setError('Error fetching coordinates. Please check the location and try again.');
    }
  }


  return (
    <div className='searchBar'>
      <input
        type='text'
        className='location'
        placeholder='Search'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>SEARCH</button>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default SearchBar;
