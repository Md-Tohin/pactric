API_KEY = `b65ce3d09b9a8ff283d66a8db9094968`;

const loadTemperature = (location) => {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(resp => resp.json())
    .then(data => displayTemperature(data));
}

loadTemperature('dhaka');

const displayTemperature = (temperature) => {
    const temperatureField = document.getElementById('temperature-field');
    temperatureField.innerText = temperature.main.temp;

    const locationField = document.getElementById('location-field');
    locationField.innerText = temperature.name;

    const weatherStatusField = document.getElementById('weather-status-field');
    weatherStatusField.innerText = temperature.weather[0].main;
}

document.getElementById('search-btn').addEventListener('click', function(){
    const locationInputField = document.getElementById('location-input-field');
    const inputValue = locationInputField.value;
    locationInputField.value = ``;
    loadTemperature(inputValue);
    console.log(inputValue);
});
