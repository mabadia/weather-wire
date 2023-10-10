import React, { useState, useEffect } from 'react';
import '../components/styles/weather.css';
import '../components/styles/navBar.css';
import CurrentWeather from '../components/CurrentWeather';

const WeatherApp = ({ currentWeather, error }) => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Check if the browser supports geolocation
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Get the user's latitude and longitude
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
          // Handle the error here, e.g., show an error message to the user
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
      // Handle the case where geolocation is not supported
    }
  }, []);


  return (
    <div className="app">
      <h1 id="weather">Weather</h1>
      {currentWeather && !error && (
        <CurrentWeather city={currentWeather.name} state={currentWeather.sys.country} />
      )}
      {error && (
        <div className="error">{error}</div>
      )}
    </div>
  );
}

export default WeatherApp;
