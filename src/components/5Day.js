import React from 'react';
import '../components/styles/CurrentWeather.css';// Import the CSS file for styling

function FiveDay({ forecastData }) {
    return (
        <div className="forecast-container">
            <h2>5-Day Weather Forecast</h2>
            {forecastData.map((dailyData, index) => (
                <div key={index[0]} className="forecast-item">
                    <h2>{dailyData.date}</h2>
                    <div className="details">
                        <div className="weather-icon">
                        </div>
                        <div className="info">
                            <p>Temperature: {dailyData.main.temp}&deg;F</p>
                            <p>Weather: {dailyData.weather[0].description}</p>
                            <p>Humidity: {dailyData.main.humidity}%</p>
                            <p>Wind Speed: {dailyData.wind.speed} mph</p>
                        </div>
                    </div>
                </div>
            ))}
      

        </div>
    );
};

export default FiveDay;

{/* <hr />
            
<hr />

<hr />

<hr /> */}
