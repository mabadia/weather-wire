import React, { useEffect, useState } from 'react';
import '../components/styles/weather.css';
import '../components/styles/navBar.css';
import CurrentWeather from '../components/CurrentWeather';

const WeatherApp = () => {
    //variables for attaining user location
    const [userLocation, setUserLocation] = useState(null);
   

    useEffect(() => {
        const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
        //geoloction for users current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${apiKey}`)
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.length > 0) {
                            const { name, state } = data[0];
                            setUserLocation({ city: name, state });
                        }
                    })
                    .catch((error)=>{
                        console.error('Error fetching user location:', error);
                    });
            });
        }
    }, []);

    
    return (
        <div className='app'>
            <h1 id="weather">Weather</h1>
            {userLocation&&(
            <CurrentWeather city={userLocation.city} state={userLocation.state} />
            )}
        </div>
    )
}

export default WeatherApp; 