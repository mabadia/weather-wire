import './App.css';
import React from 'react';
import SearchBar from './components/searchBar';
<<<<<<< HEAD
=======
import NavBar from './components/navBar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherApp from './components/weather';
import Hourly from './components/hourly';
import Weekly from './components/weekly';
import Monthly from './components/monthly';
>>>>>>> origin/navBar

function App() {
  return (
    <div className="App">
      <SearchBar/>
<<<<<<< HEAD
        
=======
      <Router>
        <>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<WeatherApp/>}/>
            <Route exact path='/hourly' element={<Hourly/>}/>
            <Route exact path='/weekly' element={<Weekly/>}/>
            <Route exact path='/monthly' element={<Monthly/>}/>
          </Routes>
        </>
      </Router>
      
>>>>>>> origin/navBar
    </div>
  );
}

export default App;
