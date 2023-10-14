import React, { useState } from 'react';
import updateLocations from '../components/updateLocations'
import '../components/styles/weather.css';
import '../components/styles/navBar.css';
import LocationInputForm from '../components/LocationInputForm';



const Locations = () => {
    const [isAddingLocation, setIsAddingLocation] = useState(false);
    const handleAddLocationClick = () => {
        setIsAddingLocation(true);
        // You can open a modal or navigate to a new page for location input
    };


    return (
        <div className='app'>
            <h2 id="Locations">Locations</h2>
            {isAddingLocation ? (
                // Render the location input form or modal
                <LocationInputForm onCancel={() => setIsAddingLocation(false)} />
            ) : (
                <button className='addButtonStyle' onClick={handleAddLocationClick} >
                    +
                </button>
            )}
        </div>
    )
}

export default Locations; 