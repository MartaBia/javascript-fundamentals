const fetchWeather = async (city) => {
  const apiKey = require('./apiKey');
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

  // let weatherData = null;

  const fetchResult = await fetch(apiUrl);
  const jsonResult = await fetchResult.json();
  return jsonResult;

  // return fetch(apiUrl)
  //  .then((response) => response.json());
  //  .then((weatherData) => weatherData);
};

module.exports = fetchWeather;
