class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minimum = 10;
    this.maximumPowerSavingOn = 25;
    this.maximumPowerSavingOff = 32;
    this.powerSaving = true;
  }

  psStatus() {
    return this.powerSaving === true ? "On" : "Off";
  }

  getCurrentTemperature(callback) {
    $.get('/temperature', function(res) {
      var data = JSON.parse(res)
      callback(data);
    });
  }

  up(currentTemperature, callback) {
    if (
      currentTemperature < this.maximumPowerSavingOn &&
      this.powerSaving === true
    ) {
      this._updateTemperature(currentTemperature + 1, callback);
    } else if (
      currentTemperature < this.maximumPowerSavingOff &&
      this.powerSaving === false
    ) {
      this._updateTemperature(currentTemperature + 1, callback);
    }
  }

  down(currentTemperature, callback) {
    if (currentTemperature > this.minimum) {
      this._updateTemperature(currentTemperature - 1, callback);
    }
  }

  powerSavingToggle() {
    if (this.powerSaving === true) {
      this.powerSaving = false;
    } else {
      this.powerSaving = true;
    }
  }

  reset(callback) {
    this._updateTemperature(20, callback);
  }

  energyUsage() {
    switch (true) {
      case this.temperature < 18:
        var usage = "low-usage";
        break;
      case this.temperature <= 25:
        var usage = "medium-usage";
        break;
      case this.temperature > 25:
        var usage = "high-usage";
        break;
    }
    return usage;
  }

  _updateTemperature(value, callback) {
    $.post('/temperature', { temperature: value }, callback)
  }
}
