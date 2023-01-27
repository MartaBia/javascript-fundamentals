const Weather = require('./weather');
const WeatherClient = require('./weatherClient');

describe('Weather', () => {
  it('fetch the weather data for a given city', async () => {
    const weatherClient = new WeatherClient;
    const weather = new Weather(weatherClient);

    // Version with await: 
    // (possible as I put 'async' when defining load and at the beginning of this function)
    await weather.load('Bristol');
    const response = weather.getWeatherData();
    expect(response.name).toBe('Bristol');

    // Version with .then:
    // weather.load('Bristol')
    //   .then(() => {
    //     const response = weather.getWeatherData();
    //     expect(response.name).toBe('Bristol');
    //   });
  });
});