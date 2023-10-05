
// Import necessary modules and the CSS file for styling
import React, { useState, useEffect } from 'react';
import './CurrentWeather.css'; // Import the CSS file for styling

// Create the CurrentWeather component, which accepts city and state as props
const CurrentWeather = ({ city, state }) => {
    // Define states to store weather data and error messages
    const [weatherData, setWeatherData] = useState(null); // State to store weather data
    const [error, setError] = useState(null); // State to store error messages

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
        'rainy night': 'rainy-night', // CSS class for rainy night weather
        'rainy day': 'rainy-day', // CSS class for rainy day weather
        // Add more conditions as needed for other weather types-NEED TO ADD MORE FOR ALL POSSIBLE WEATHER:OUTCOMES!
    };

    // useEffect hook to fetch weather data when the component is mounted or when city/state changes
    useEffect(() => {
        // Retrieve the OpenWeatherMap API key from environment variables
        const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

        // Check if both city and state are provided
        if (city && state) {
            // Construct the API URL to fetch weather data
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid=${apiKey}`;

            // Fetch weather data from the OpenWeatherMap API
            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    // If successful, update the weatherData state with the received data and clear any existing errors
                    setWeatherData(data);
                    setError(null);
                })
                .catch((error) => {
                    // If an error occurs during the fetch, log the error and set an error message
                    console.error('Error fetching data:', error);
                    setError('An error occurred while fetching weather data.');
                });
        }
    }, [city, state]);

    // Function to determine the CSS class for the background based on weather conditions
    const getWeatherBackgroundClass = () => {
        if (weatherData) {
            // Extract the weather condition from the weather data
            const weatherCondition = weatherData.weather[0].main.toLowerCase();

            // To check if a class exists for the weather condition, otherwise use 'default-background'
            return weatherConditionClasses[weatherCondition] || 'default-background';
        }
        // Default class if weather data is not available
        return 'default-background';
    };

    // Render the weather information and error message
    return (
        <div className={`current-weather ${getWeatherBackgroundClass()}`}>
            {weatherData && (
                <>
                    <h2>Current Weather</h2>
                    <p>Location: {weatherData.name}, {weatherData.sys.country}</p>
                    <p>Temperature: {weatherData.main.temp} °F</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} mph</p>
                </>
            )}
            {error && <div className="error">{error}</div>}
        </div>
    );
};

// Export the CurrentWeather component
export default CurrentWeather;
