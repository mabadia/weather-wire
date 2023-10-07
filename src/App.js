import React, { useState } from 'react';
import SearchBar from './components/searchBar';
import NavBar from './components/navBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrentWeather from './components/CurrentWeather';

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
                        <Route
                            exact
                            path='/'
                            element={<CurrentWeather city={location.city} state={location.state} />}
                        />
                        {/* Other routes here */}
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







