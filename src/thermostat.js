class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minimum = 10;
    this.maximumPowerSavingOn = 25;
    this.maximumPowerSavingOff = 32;
    this.powerSaving = true;
  }

  up() {
    if (
      this.temperature < this.maximumPowerSavingOn &&
      this.powerSaving === true
    ) {
      this.temperature++;
    } else if (
      this.temperature < this.maximumPowerSavingOff &&
      this.powerSaving === false
    ) {
      this.temperature++;
    }
  }

  down() {
    if (this.temperature > this.minimum) {
      this.temperature--;
    }
  }

  powerSavingToggle() {
    if (this.powerSaving === true) {
      this.powerSaving = false;
    } else {
      this.powerSaving = true;
    }
  }

  reset() {
    this.temperature = 20;
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
}
