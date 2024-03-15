const apiKey = '2b1edbf49a052b6ab3a193b43b09e9c2';

const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeather(city);
    }
});

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const weatherInfo = `Temperature: ${temperature}°C
Weather: ${description}`;
    weatherResult.innerHTML = weatherInfo;
}