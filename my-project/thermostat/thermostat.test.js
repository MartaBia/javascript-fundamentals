const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  it('return the default temperature of 20 degree', () => {
  let thermostat = new Thermostat();
  expect(thermostat.getTemperature()).toBe(20);
  });

  it('returns the themperature after it has ben raised and then lowered', () => {
    let thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);

    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it('returns the maximum temperature when power saving mode is on or off', () => {
    let thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true); 

    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    };

    expect(thermostat.getTemperature()).toBe(25);

    thermostat.setPowerSavingMode(false);
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(26);

    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('return the minimum possible temperature of 10 degrees', () => {
    let thermostat = new Thermostat();
    for (let i = 0 ; i < 12 ; i++) {
      thermostat.down();
    };

    expect(thermostat.getTemperature()).toBe(10);
  });
});