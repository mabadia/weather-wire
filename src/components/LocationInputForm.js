import React from 'react';

const LocationInputForm = ({ onCancel, onSave }) => {
  const [locationName, setLocationName] = React.useState('');

  const handleSaveLocation = () => {
   // Create the data to send in the request body
   const data = {
    locationName: locationName,
  };

  fetch('https://api.weather.gov', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        // Handle a successful response 
        console.log('Location saved');
      } else {
        // Handle errors
        console.error('Error saving location');
      }
    })
    .catch((error) => {
      // Handle network errors
      console.error('Network error:', error);
    });

  // Close the form
  onCancel();
};

return (
  <div>
    <h3>Add New Location</h3>
    <input
      type="text"
      placeholder="Enter a location name"
      value={locationName}
      onChange={(e) => setLocationName(e.target.value)}
    />
    <button onClick={handleSaveLocation}>Save</button>
    <button onClick={onCancel}>Cancel</button>
  </div>
);
};

export default LocationInputForm;





