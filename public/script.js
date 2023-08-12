// script.js
function displayUserLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    
    fetch(`/damn?Latitude=${latitude}&&Longitude=${longitude}`);
    
}

function handleLocationError(error) {
    console.error('Error getting user location:', error.message);
}

function getUserLocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(displayUserLocation, handleLocationError);
    } else {
        console.error('Geolocation is not available in this browser.');
    }
}

getUserLocation();
