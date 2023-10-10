import React, { useEffect, useState } from 'react';
import '../components/styles/weather.css';
import FiveDay from '../components/5Day';


const Weekly = () => {
    // useState for forcast data 
    const [forecastData, setForecastData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //fetch request for data 
    useEffect(() => {
        const city = '';
        const state = '';
        const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
        //api endpoint URL
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city.trim()},${state.trim()}&appid=${apiKey}`;

        // api request api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&units=imperial&appid=
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Weather retrival has failed.');
                }
                return response.json();
            })
            // data from request
            .then((data) => {
                const forecast = data.list || [];
                //useState data
                setForecastData(forecast);
                //after data is loaded
                setLoading(false);
            })
            .catch((error) => {
                console.error('Failed to fetch weather data:', error);
                setError('An error occurred while fetching weather data.');
                setLoading(false);
            });
    }, []);
    // sorting the forcast 
    function forecastByDay(forecast) {
        // variable for data to be returned 
        const dailyForecast = {};
        //searching for data needed and breakdown 
        forecast.forEach((hourlyData) => {
            const date = new Date(hourlyData.dt * 1000);
            const day = date.toDateString();
            if (!dailyForecast[day]) {
                dailyForecast[day] = [];
            }
            dailyForecast[day].push({
                date: date.toLocaleDateString(),
                temp: Math.round(hourlyData.main.temp),
                weatherDescription: hourlyData.weather[0].description,
                humidity: Math.round(hourlyData.main.humidity),
                windSpeed: Math.round(hourlyData.wind.speed),
            });
        });
        // converts weather values into array
        return Object.values(dailyForecast);
    };


    return (
        <div className='app'>
            <h1 id="hourly">Weekly</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className='week'>
                <h2>Long Beach, CA</h2>

                <FiveDay forecastData={forecastData} />
            </div>
        </div>
    )
}

export default Weekly; 


    // function getWeatherIcon(description) {

    //     return ['fas', 'question-circle'];
    // }
// Weather Data:
// Object
// base: "stations"
// clouds: { all: 65 }
// cod: 200
// coord: {
//     lat: 48.9716
//     lon: -125.5887
// }

// dt: 1696655310
// id: 6171633
// main: {
//     feels_like: 54.28
// humidity: 89
// pressure: 1015
// temp: 54.91
// temp_max: 54.91
// temp_min: 54.91
// }

// name: "Long Beach"
// sys:{
// country: "CA"
// id: 19458
// sunrise: 1696602537
// sunset: 1696643507
// type: 2
// }

// timezone: -25200
// visibility: 10000
// weather: Array(1)[
// 0:{
// description: "broken clouds"
// icon: "04n"
// id: 803
// main: "Clouds"
// }]
// length: 1
// wind: {
//     deg: 59
// gust: 3.44
// speed: 3.24
// }



