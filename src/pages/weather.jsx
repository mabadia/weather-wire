import React, { useState, useEffect } from 'react';
import '../components/styles/weather.css';
import '../components/styles/navBar.css';
import CurrentWeather from '../components/CurrentWeather';

const WeatherApp = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if coordinates are available
    if (coordinates) {
      const { latitude, longitude } = coordinates;

      // Construct the API URL to fetch weather data
      const apiUrl = `https://api.weather.gov/points/${latitude},${longitude}`;

      // Fetch weather data from the new API);
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Weather data not available.');
          }
          return response.json();
        })
        .then((data) => {
          // Extract the forecast URL from the response
          const forecastUrl = data.properties.forecast;
          // Fetch the forecast data from the forecast URL
          return fetch(forecastUrl);
        })
        .then((forecastResponse) => {
          if (!forecastResponse.ok) {
            throw new Error('Forecast data not available.');
          }
          return forecastResponse.json();
        })
        .then((forecastData) => {
          // Set the current weather data
          setCurrentWeather(forecastData.properties.periods[0]);
          setError(null);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
          setError('An error occurred while fetching weather data.');
        });
    }
  }, [coordinates]);

  return (
    <div className="app">
      <h1 id="weather">Weather</h1>
      {currentWeather && !error && (
        <CurrentWeather
          city={currentWeather.name}
          state={currentWeather.state}
          temperature={currentWeather.temperature}
          description={currentWeather.shortForecast}
        />
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default WeatherApp;
