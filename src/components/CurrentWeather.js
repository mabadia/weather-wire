
// Import necessary modules and the CSS file for styling
import React, { useState, useEffect } from 'react';
import '../components/styles/CurrentWeather.css';// Import the CSS file for styling


    // Define a mapping of weather conditions to class names for background styling
    const weatherConditionClasses = {
        clear: 'clear-sky', // CSS class for clear weather
        rain: 'rainy', // CSS class for rainy weather
        clouds: 'cloudy', // CSS class for cloudy weather
        snow: 'snowy', // CSS class for snowy weather
        thunderstorm: 'thunderstorm', // CSS class for thunderstorm weather
        night: 'night', // CSS class for night weather
        'night cloud': 'night-cloudy', // CSS class for night cloudy weather
        'night thunderstorm': 'night-thunderstorm', // CSS class for night thunderstorm weather
        'night time': 'night-time', // CSS class for night time weather
        'rainy night': 'rainy-night', // CSS class for rainy night weatherAl
        'rainy day': 'rainy-day', // CSS class for rainy day weather
        // Add more conditions as needed for other weather types-NEED TO ADD MORE FOR ALL POSSIBLE WEATHER:OUTCOMES!
    };
    
// Create the CurrentWeather component, which accepts city and state as props
const CurrentWeather = ({ city, state }) => {

    const [weatherData, setWeatherData] = useState(null); 
    const [error, setError] = useState(null); 


    const fetchWeatherByLatLon = (latitude, longitude) => {
        const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
    
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            setWeatherData(data);
            setError(null);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            setError('An error occurred while fetching weather data.');
          });
      };



      useEffect(() => {
        const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    
        if (city && state) {
        
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid=${apiKey}`;
          fetchWeatherByLatLon(apiUrl);
        } else {
          
          const latitude = 40.7128; 
          const longitude = -74.0060; 
          fetchWeatherByLatLon(latitude, longitude);
        }
      }, [city, state]);



    // Function to determine the CSS class for the background based on weather conditions
    const getWeatherBackgroundClass = () => {
        if (weatherData) {
            // Extract the weather condition from the weather data
            const weatherCondition = weatherData.weather[0].main.toLowerCase();

            
            return weatherConditionClasses[weatherCondition] || 'default-background';
        }
       
        return 'default-background';
    };

    // Render the weather information and error message
    return (
        <div className={`current-weather ${getWeatherBackgroundClass()}`}>
            {weatherData && (
                <>
                    <h2>Current Weather</h2>
                    <p>Location: {weatherData.name}, {weatherData.sys.country}</p>
                    <p>Temperature: {Math.round(weatherData.main.temp)} °F</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {Math.round(weatherData.wind.speed)} mph</p>
                </>
            )}
            {error && <div className="error">{error}</div>}
        </div>
    );
};

// Export the CurrentWeather component
export default CurrentWeather;
