const WeatherClient = require('./weatherClient');

class Weather {
  constructor(client) {
    this.client = client
  };

  load(city) {
    return this.client.fetchWeatherData(city)
  };

  getWeatherData() {
    return this.client
  };
};

const weatherClient = new WeatherClient;
const weather = new Weather(weatherClient);
weather.load('Bristol')
  .then(() => {
    console.log(weather.getWeatherData())
  })

module.exports = Weather;