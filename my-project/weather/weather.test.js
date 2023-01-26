const Weather = require('./weather');
const WeatherClient = require('./weatherClient');

describe('Weather', () => {
  it('fetch the weather data for a given city', async () => {
    const weatherClient = new WeatherClient;
    const weather = new Weather(weatherClient);
    weather.load('Bristol');
    const response = await weather.getWeatherData();
    expect(response.name).toBe('Bristol');
  });

  // it('fetch the weather data for a given city', async () => {
  //   const weatherClient = new WeatherClient;
  //   const weather = new Weather(weatherClient);
  //   weather.load('Bristol');
  //   await weather.getWeatherData();

  // });
});