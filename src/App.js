import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/searchBar';
import NavBar from './components/navBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherApp from './pages/weather';
import Weekly from './pages/weekly';
import Locations from './pages/Locations';
import SignUp from './pages/signUp';
import Login from './pages/login';




function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState(null);

  const updateLocation = (newLocation) => {
    setLocation(newLocation);
  };
  const updateCoordinates = (newCoordinates) => {
    setCoordinates(newCoordinates);
  };
  // Function to update weather data based on the searched location
  const updateWeatherData = async (newLocation) => {
    console.log('New Location:', newLocation);
    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

    try {
      const currentWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${newLocation}&units=imperial&appid=${apiKey}`
      );

      if (!currentWeatherResponse.ok) {
        setError('Location not found. Please check the spelling.');
        setCurrentWeather(null); // Clear the currentWeather state on error
        return;
      }

      const currentWeatherData = await currentWeatherResponse.json();
      setCurrentWeather(currentWeatherData);
      setError(null);

     }
    
       catch (error) {
          console.error('Error fetching weather data:', error);
         setError('An error occurred while fetching weather data.');
      setCurrentWeather(null); // Clear the currentWeather state on error
    }
  };

  return (
    <div className="App">
      <SearchBar updateLocation={updateLocation} updateCoordinates={updateCoordinates} />
      <Router>
        <>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<WeatherApp coordinates={coordinates} />}/>
            <Route exact path="/weekly" element={<Weekly />} />
            <Route exact path="/Locations" element={<Locations />} />
            <Route exact path="/signUp" element={<SignUp />} /> 
            <Route exact path="/Login" element={<Login />} />
          </Routes>
        </>
      </Router>
    
    </div>
  );
}
export default App;

