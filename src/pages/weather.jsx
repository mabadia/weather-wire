import React from 'react'
import '../components/styles/weather.css'
import '../components/styles/navBar.css'
import CurrentWeather from '../components/CurrentWeather';



const WeatherApp = () => {



    return (
        <div className='app'>
            <h1 id="weather">Weather</h1>
            <CurrentWeather />
        </div>
    )
}

export default WeatherApp; 