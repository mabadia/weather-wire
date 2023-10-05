import './App.css';
import React from 'react';
import SearchBar from './components/searchBar';
import NavBar from './components/navBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherApp from './pages/weather';
import Hourly from './pages/Hourly';
import Weekly from './pages/weekly';
import Locations from './pages/Locations';
import SignUp from './pages/signUp';
import Login from './pages/login';
import { main } from '@popperjs/core';


function App() {
  return (

    <div className="App">
      <SearchBar />

      <Router>
        <>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<WeatherApp />} />
            <Route exact path='/Hourly' element={<Hourly />} />
            <Route exact path='/weekly' element={<Weekly />} />
            <Route exact path='/Locations' element={<Locations />} />
            <Route exact path='/signUp' element={<SignUp />} />
            <Route exact path='/login' element={<Login />} />
          </Routes>
        </>
      </Router>

    </div>
  );
}

export default App;
