import React, { useState, useEffect } from 'react';
import './weather.css';




function SearchBar() {
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
                `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()},${state.trim()}&units=imperial&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
            );
            if (response.ok) {
                const data = await response.json();
                setWeatherData(data);
                setError(null);
            } else {
                setError('Location not found. Please check the spelling.');
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('An error occurred while fetching weather data.');
        }
    }

    useEffect(() => {
        if (weatherData) { console.log('Weather Data:', weatherData); }
    }, [weatherData]);

    return (
        <div className='searchBar'>
            <input type='text'
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



// let url = ``;
// let response = await fetch(url);
// let data = response.json();
// const element = document.getElementsByClassName({location})