import './App.css';
import React from 'react';
import SearchBar from './components/searchBar';
import NavBar from './components/navBar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherApp from './components/weather';
import Hourly from './components/hourly';
import Weekly from './components/weekly';
import Locations from './pages/Locations';
import SignUp from './pages/signUp';
import Login from './pages/login';


function App() {
  return (
    <div className="App">
      <SearchBar/>
      <Router>
        <>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<WeatherApp/>}/>
            <Route exact path='/Hourly' element={<Hourly/>}/>
            <Route exact path='/weekly' element={<Weekly/>}/>
            <Route exact path='/Locations' element={<Locations/>}/>
            <Route exact path='/signUp' element={<SignUp/>}/>
            <Route exact path='/login' element={<Login/>}/>
          </Routes>
        </>
      </Router>
      
    </div>
  );
}

export default App;
