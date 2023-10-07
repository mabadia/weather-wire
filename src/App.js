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
  const [location, setLocation] = useState({ city: '', state: '' });

  const updateLocation = (newCity, newState) => {
    setLocation({ city: newCity, state: newState });
  };
  return (
    <div className="App">
      <SearchBar updateLocation={updateLocation} />
      <Router>
        <>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<WeatherApp />} />
            <Route exact path='/weekly' element={<Weekly />} />
            <Route exact path='/Locations' element={<Locations />} />
          </Routes>
        </>
      </Router>

    </div>
  );
}

export default App;
