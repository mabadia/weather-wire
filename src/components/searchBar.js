import React, { useState, useEffect } from 'react';
import './styles/weather.css';
import './styles/searchBar.css';



function SearchBar({ updateLocation }) {
    //global variables searchbar function
    const [location, setLocation] = useState('');
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [error, setError] = useState(null);

    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
    //searchBar context data
    const fetchCurrentWeather = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`
            );
            if (!response.ok) {
                setError('Location not found. Please check the spelling.');
                return;
            }
            const data = await response.json();
            setCurrentWeather(data);
            setError(null);
        } catch (error) {
            console.error('Error fetching current weather data:', error);
            setError('An error occurred while fetching current weather data.');
        }
    };

    const fetchWeatherForecast = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=${apiKey}`
            );

            if (!response.ok) {
                setError('Location not found. Please check the spelling.');
                return;
            }

            const data = await response.json();
            // Assuming the forecast data is an array in the response
            setForecast(data.list || []);
            setError(null);
        } catch (error) {
            console.error('Error fetching weather forecast data:', error);
            setError('An error occurred while fetching weather forecast data.');
        }
    };

    const handleSearch = () => {
        if (location.trim() === '') {
            setError('Please enter a valid location.');
            return;
        }

        fetchCurrentWeather();
        fetchWeatherForecast();
    };

    useEffect(() => {
        if (currentWeather) {
            console.log('Weather Data:', currentWeather);
        }
        if (forecast.length > 0) {
            console.log('Weather Forecast Data:', forecast);
        }
    }, [currentWeather, forecast]);

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
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default SearchBar;

// `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city.trim()},${state.trim()}&units=imperial&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
// `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()},${state.trim()}&units=imperial&appid=${process.env.API_KEY}`
// `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`