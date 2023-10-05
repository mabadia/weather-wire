import React, { useState } from 'react';
import './searchBar.css';

function SearchBar({ updateLocation }) {
    const [location, setLocation] = useState('');
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const [city, state] = location.split(',');

            if (!city || !state) {
                setError('Please enter a valid location in the format "City, State."');
                return;
            }

            setError(null);
            updateLocation(city.trim(), state.trim());
        } catch (error) {
            console.error('Error handling search:', error);
            setError('An error occurred while processing the search.');
        }
    };

    return (
        <div className='search-bar'>
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
