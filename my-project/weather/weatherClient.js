const fetchWeather = require('./index');

class WeatherClient {
  fetchWeatherData(city) {
    return fetchWeather(city)
  };
};

const client = new WeatherClient();

// Commented for tests
// client.fetchWeatherData('London').then((weatherData) => {
//   console.log(`Weather data for ${weatherData.name}:`)
//   console.log(`Weather: ${weatherData.weather[0].main}`);
//   console.log(`Temperature: ${weatherData.main.temp}`);
// });

// client.fetchWeatherData('Florence').then((weatherData) => {
//   console.log(`Weather data for ${weatherData.name}:`)
//   console.log(`Weather: ${weatherData.weather[0].main}`);
//   console.log(`Temperature: ${weatherData.main.temp}`);
// });

module.exports = WeatherClient;