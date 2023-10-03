import React, { useState } from 'react';
import '/weather.css'

function SearchBar() {
    const [location, setLocation] = useState('');
    const handleSearch = () => {
        console.log('Searching for:', location)
    }

    /*let api_key = "ddf9754a5ff837bfe897084619c561bf";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${api_key}`;
    let response = await fetch(url);
    let data = response.json();
    // const element = document.getElementsByClassName({location})
    */

    return (
        <div className='searchBar'>
            <input type='text'
                className='location'
                placeholder='Search'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleSearch}>SEARCH</button>
        </div>
    );
}

export default SearchBar;