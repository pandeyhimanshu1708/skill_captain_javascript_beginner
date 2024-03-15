async function fetchWeather(city) {
    const apiKey = '2b1edbf49a052b6ab3a193b43b09e9c2';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            console.log(`Weather information for ${city}:`);
            console.log(`Temperature: ${data.main.temp}°C`);
            console.log(`Weather conditions: ${data.weather[0].description}`);
            console.log(`Humidity: ${data.main.humidity}%`);
            console.log(`Wind speed: ${data.wind.speed} m/s`);
            console.log(`Visibility: ${data.visibility} meters`);
        } else {
            console.error(`Failed to fetch weather data. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

