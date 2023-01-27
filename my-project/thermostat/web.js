const express = require('express');
const Thermostat = require('./thermostat');
const app = express();
const port = 3000;

const thermostat = new Thermostat();

app.get('/temperature', (req, res) => {
  let temperature = thermostat.getTemperature();
  res.send(JSON.stringify(temperature));
});

app.post('/down', (req, res) => {
  thermostat.down()
  res.send();
});

app.post('/up', (req, res) => {
  thermostat.up()
  res.send();
});

app.delete('/temperature', (req, res) => {
  thermostat.reset();
  res.send();
});

app.listen(port);