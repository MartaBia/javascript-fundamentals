const Weather = require('./weather');
const WeatherClient = require('./weatherClient');

describe('Weather', () => {
  // Test without mocking:
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

  // Test with mocking:
  // Version with done()
  it('fetch the weather data for Bristol', (done) => {
    const mockClient = {
      fetchWeatherData: jest.fn(),
    };

    mockClient.fetchWeatherData.mockResolvedValueOnce({
      name: 'Bristol',
      coord: { lon: -71.1662, lat: 41.8334 }
    });

    const weather = new Weather(mockClient);
    weather.load('Bristol').then(() => {
      expect(mockClient.fetchWeatherData).toHaveBeenCalledWith('Bristol');
      const response = weather.getWeatherData();
      expect(response.name).toBe('Bristol');
      done();
    });
  });

  // Version with async-await:
  it('fetch the weather data for Bristol', async () => {
    const mockClient = {
      fetchWeatherData: jest.fn(),
    };

    mockClient.fetchWeatherData.mockResolvedValueOnce({
      name: 'Bristol',
      coord: { lon: -71.1662, lat: 41.8334 }
    });

    const weather = new Weather(mockClient);
    await weather.load('Bristol')
    expect(mockClient.fetchWeatherData).toHaveBeenCalledWith('Bristol');
    const response = weather.getWeatherData();
    expect(response.name).toBe('Bristol');
    expect(response.coord).toStrictEqual( { lon: -71.1662, lat: 41.8334 } );
  });
});