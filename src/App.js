import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/searchBar';
import NavBar from './components/navBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherApp from './pages/weather';
import Weekly from './pages/weekly';
import Locations from './pages/Locations';
import SignUp from './pages/signUp';
import Login from './pages/login';



function App() {
  const [location, setLocation] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);


  const updateLocation = async (newLocation) => {
    console.log('New Location:', newLocation)
    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    // updates location
    setLocation(newLocation);
    try {
      const currentWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${newLocation}&units=imperial&appid=${apiKey}`
      );

      if (!currentWeatherResponse.ok) {
        setError('Location not found. Please check the spelling.');
        return;
      }

      const currentWeatherData = await currentWeatherResponse.json();
      setCurrentWeather(currentWeatherData);
      setError(null);

      const weatherForecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${newLocation}&units=imperial&appid=${apiKey}`
      );

      if (!weatherForecastResponse.ok) {
        setError('Location not found. Please check the spelling.');
        return;
      }

      const weatherForecastData = await weatherForecastResponse.json();
      // Assuming the forecast data is an array in the response
      setForecast(weatherForecastData.list || []);
      setError(null);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('An error occurred while fetching weather data.');
    }
  };

  return (
    <div className="App">
      <SearchBar location={location} updateLocation={updateLocation} />
      <Router>
        <>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<WeatherApp location={location} />} />
            <Route exact path='/weekly' element={<Weekly />} />
            <Route exact path='/Locations' element={<Locations />} />
          </Routes>
        </>
      </Router>

    </div>
  );
}

export default App;

