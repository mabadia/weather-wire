import React, { useEffect, useState } from 'react';
import '../components/styles/weather.css';
import '../components/styles/navBar.css';
import CurrentWeather from '../components/CurrentWeather';

const WeatherApp = (props) => {
    //variables for attaining user location
    const { location } = props;
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [error, setError] = useState(null);
    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

    useEffect(() => {
        const apiUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
        const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=${apiKey}`;

        // Fetch current weather data
        fetch(apiUrlCurrent)
            .then((response) => response.json())
            .then((data) => {
                setCurrentWeather(data);
                setError(null);
            })
            .catch((error) => {
                console.error('Error fetching current weather data:', error);
                setError('An error occurred while fetching current weather data.');
            });

        // Fetch weather forecast data
        fetch(apiUrlForecast)
            .then((response) => response.json())
            .then((data) => {
                setForecast(data.list || []);
                setError(null);
            })
            .catch((error) => {
                console.error('Error fetching weather forecast data:', error);
                setError('An error occurred while fetching weather forecast data.');
            });
    }, [location]);

    return (
        <div className="app">
            <h1 id="weather">Weather</h1>
            {currentWeather && (
                <CurrentWeather currentWeather={currentWeather} />
            )}
            {forecast.length > 0 && (
        // Render weather forecast data here
      )}
            {error && (
               <error404 />
            )}
        </div>

    )
}

export default WeatherApp;

