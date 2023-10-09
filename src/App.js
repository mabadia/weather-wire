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
      <SearchBar updateWeatherData={updateWeatherData} />
      <Router>
        <>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<WeatherApp currentWeather={currentWeather} error={error} />}
            />
            <Route exact path="/weekly" element={<Weekly />} />
            <Route exact path="/Locations" element={<Locations />} />
          </Routes>
        </>
      </Router>
    </div>
  );
}
export default App;

const AppRouter = require('express').Router();
const App = require('../components/CurrentWeather');

AppRouter.get('/', (req, res) => {
    res.render('components/Index', { App })

});

AppRouter.get('/new', (req, res) => {
    res.render('components/Hourly');
});

AppRouter.get('/:id', (req,res) =>{
    let id = Number(req.params.id);
    if (isNaN(id)) {
        res.render('Error404');
       } else if (!App[id]) {
        res.render('Error404');
       }  
    else {
        res.render('components/Location', { place: App[id], id });
    }
});







