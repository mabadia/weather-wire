import React from 'react'
import '../components/styles/weather.css'
import '../components/styles/navBar.css'
import CurrentWeather from '../components/CurrentWeather';



const WeatherApp = () => {
    const city = 'Long Beach'; 
    const state = 'CA';


    return (
        <div className='app'>
            <h1 id="weather">Weather</h1>
            <CurrentWeather city={city} state={state} />
        </div>
    )
}

export default WeatherApp; 