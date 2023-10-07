import React, { useState } from 'react';
import './styles/weather.css';
import './styles/searchBar.css';



function SearchBar({ updateLocation }) {
    //global variables searchbar function
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        // updates the location in parent component
        updateLocation(location);
    };

    return (
        //searchBar component 
        <div className='searchBar'>
            <input
                type='text'
                className='location'
                placeholder='Search'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleSearch}>SEARCH</button>
        </div>
    );
}

export default SearchBar;
