import React, { useState, useEffect } from 'react';
import './weather.css';
import './searchBar.css';



function SearchBar({ updateLocation }) {
    //global variables searchbar function
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const [city, state] = location.split(',');

            if (!city || !state) {
                setError('Please enter a valid location in the format "City, State."');
                return;
            }

            const response = await fetch(
                `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city.trim()},${state.trim()}&units=imperial&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
                `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()},${state.trim()}&units=imperial&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
                );
                setError(null);
                updateLocation(city.trim(), state.trim());
            if (response.ok) {
                const data = await response.json();
                setWeatherData(data);
                setError(null);
            } else {
                setError('Location not found. Please check the spelling.');
            }
        } catch (error) {
            console.error('Error handling search:', error);
            setError('An error occurred while processing the search.');
        }
    };

    useEffect(() => {
        if (weatherData) { console.log('Weather Data:', weatherData); }
    }, [weatherData]);
    
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
