const WeatherClient = require('./weatherClient');

class Weather {
  constructor(client) {
    this.weatherData = null;
    this.client = client;
  };

  async load(city) {
    return this.client.fetchWeatherData(city)
      .then((data) => this.weatherData = data); // {} not needed as it is done within a line
  };

  getWeatherData() {
    return this.weatherData;
  };
};

// Commented for tests
// const weatherClient = new WeatherClient();
// const weather = new Weather(weatherClient);
// weather.load('Bristol')
//   .then(() => console.log(weather.getWeatherData()));

module.exports = Weather;