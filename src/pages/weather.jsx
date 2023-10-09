import React from 'react';
import '../components/styles/weather.css';
import '../components/styles/navBar.css';
import CurrentWeather from '../components/CurrentWeather';

const WeatherApp = ({ currentWeather, error }) => {
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
