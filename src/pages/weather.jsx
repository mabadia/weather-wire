import React, { useState, useEffect } from 'react';
import '../components/styles/weather.css';
import '../components/styles/navBar.css';
import CurrentWeather from '../components/CurrentWeather';

const WeatherApp = () => {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const latitude = 39.7456;
    const longitude = -97.0892;
    const apiUrl = `https://api.weather.gov/points/${latitude},${longitude}`;
    fetch(apiUrl)
      .then((response) => { 
        if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
      .then((data) => {
        if (data.properties && data.properties.periods){
        setForecast(data.properties.periods);
      } else {
        setError('Invalid data format');
      }
      })
      .catch((error) => {
        console.error('Error fetching weather data: ${error.message}');
      });
  }, []);


  return (
    <div className="app">
      <h1 id="weather">Weather</h1>
      {forecast ? (
        <div>
          <h2>Weather Forecast</h2>
          <ul>
            {forecast.map((period) => (
              <li key={period.number}>
                <strong>{period.name}:</strong> {period.detailedForecast}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default WeatherApp;



// {currentWeather ? (
//   <CurrentWeather
//     location={currentWeather.geometry}
//     weatherData={currentWeather.properties}
//   />
// ) : (
//  
// )}
// {error && <div className="error">{error}</div>}
// // Check if the browser supports geolocation
// if ('geolocation' in navigator) {
//   navigator.geolocation.getCurrentPosition(
//     async (position) => {
//       try {
//         // Get the user's latitude and longitude
//         const { latitude, longitude } = position.coords;
//         // Fetch Current Weather Forecast using weather.gov API
//         const weatherApiUrl = `https://api.weather.gov/points/${latitude},${longitude}`;
//         const weatherResponse = await fetch(weatherApiUrl);
//         if (!weatherResponse.ok) {
//           throw new Error('Failed to fetch weather data.');
//         }

//         const weatherData = await weatherResponse.json();

//         // Update currentWeather state with weather data
//         setCurrentWeather(weatherData);
//         setError(null);
//       } catch (error) {
//         console.error('Error getting weather data:', error);
//         setError('An error occurred while fetching weather data.');
//       }
//     },
//     (error) => {
//       console.error('Error getting user location:', error);
//       setError('An error occurred while getting user location.');
//     }
//   );
// } else {
//   console.error('Geolocation is not supported by your browser.');
//   setError('An error occurred while getting user location.');
// }


// const googleMapsApiKey = 'AIzaSyBpTsvLU8wjv-hcF3rqeQwa6SxVGEw7SRU';
//           const geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${googleMapsApiKey}`;
// const geocodingResponse = await fetch(geocodingApiUrl);
//             const geocodingData = await geocodingResponse.json();

//             // Extract the latitude and longitude from the geocoding response
//             const latitude = geocodingData.results[0].geometry.location.lat;
// //             const longitude = geocodingData.results[0].geometry.location.lng;
// //             // Fetch Current Weather Forecast using weather.gov API
// //             const weatherApiUrl = `https://api.weather.gov/points/${latitude},${longitude}`;
// const weatherResponse = await fetch(weatherApiUrl);
// const weatherData = await weatherResponse.json();
//Update currentWeather state with weather data
//  setCurrentWeather(weatherData);
//  setError(null);


{/* <div className="app">
<h1 id="weather">Weather</h1>
<CurrentWeather city={currentWeather.properties.relativeLocation.properties.city} state={currentWeather.properties.relativeLocation.properties.state} />
</div> */}