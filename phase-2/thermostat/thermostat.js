class Thermostat {
  constructor() {
    this.temperature = 20;
    this.maxTemperature = 25;
  };

  getTemperature() {
    return this.temperature;
  }

  up() {
    this.temperature += 1
    if(this.temperature > this.maxTemperature) {this.temperature = this.maxTemperature};
  };

  down() {
    this.temperature -= 1
    if(this.temperature < 10) {this.temperature = 10};
  };

  setPowerSavingMode(boolean) {
    if(boolean == false) { this.maxTemperature = 32};
  };

  reset() {
    this.temperature = 20
  };
};

module.exports = Thermostat;