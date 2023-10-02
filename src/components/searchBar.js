import React from 'react';

function SearchBar () {
const staticPosition = {
    'position': 'fixed',
    'top': '0',
    'text-align': 'center'
}
/*let api_key = "ddf9754a5ff837bfe897084619c561bf";

const handleSearch = async () =>{
    const element = document.getElementsByClassName({location})
}
let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${api_key}`;
let response = await fetch(url);
let data = response.json();
*/
    return (
    <div className='searchBar' style={staticPosition}>
        <input type='text' className='location' placeholder='Search'/>
        <button type='submit' >SEARCH</button>
    </div>
)
}

export default SearchBar;