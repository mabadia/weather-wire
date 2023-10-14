import React, { useState } from "react";

const updateLocation = () => {
    const [savedLocations, setSavedLocations] = useState([]);
    const [newLocation, setNewLocation] = useState('');

    //add a location
    const addLocation = (location) => {
        if(newLocation){
        setSavedLocations([...savedLocations, location]);
        setNewLocation(''); //clears input field
        }
    };
    //remove location
    const removeLocation = (locationIndex) => {
        const updateLocations = savedLocations.filter((_, index) => index !== locationIndex);
        setSavedLocations(updatedLocations);
    };


    return (
        <div>
        <h3>Update Locations</h3>
        <input
          type="text"
          placeholder="Enter a new location"
          value={newLocation}
          onChange={(e) => setNewLocation(e.target.value)}
        />
        <button onClick={addLocation}>Add Location</button>
  
        <ul>
          {savedLocations.map((location, index) => (
            <li key={index}>
              {location} - <button onClick={() => removeLocation(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    )
}
export default updateLocations;