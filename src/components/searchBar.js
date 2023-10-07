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

// `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city.trim()},${state.trim()}&units=imperial&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
// `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()},${state.trim()}&units=imperial&appid=${process.env.API_KEY}`
// `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`