import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function FiveDay({ forecastData }) {
    return (
        <div className="forecast-container">
            {forecastData.map((dailyData, index) => (
                <div key={index} className="forecast-item">
                    <h2>{dailyData.date}</h2>
                    <div className="details">
                    <div className="weather-icon">
                            {/* Use FontAwesomeIcon with appropriate icon for weather description */}
                            <FontAwesomeIcon icon={dailyData.weatherIcon} />
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