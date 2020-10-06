describe("thermostat", function () {
  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it("has a starting temperature of 20", function () {
    expect(thermostat.temperature).toEqual(20);
  });

  describe("up", function () {
    it("Use up function once and see the correct temperature", function () {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it("Use up function twice and see the correct temperature", function () {
      thermostat.up();
      thermostat.up();
      expect(thermostat.temperature).toEqual(22);
    });
  });

  describe("down", function () {
    it("Use down function once and see the correct temperature", function () {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });
    it("Use down function twice and see the correct temperature", function () {
      thermostat.down();
      thermostat.down();
      expect(thermostat.temperature).toEqual(18);
    });
  });
  describe("minimum temperature set to 10", function () {
    it("Use down function eleven times and see the minimum temperature", function () {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }

      expect(thermostat.temperature).toEqual(10);
    });
  });
  describe("maximum temperature with powersaving on is 25 degrees", function () {
    it("Use up function six times and see max temperature", function () {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(25);
    });
  });
  describe("maximum temperature with powersaving off is 32 degrees", function () {
    it("Use up function 13 times and see max temperature", function () {
      thermostat.powerSavingToggle();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(32);
    });
  });

  describe("Power Saving Mode", function () {
    it("Checks that power saving mode is on by default", function () {
      expect(thermostat.powerSaving).toEqual(true);
    });
    it("Checks that power saving mode is off when we use the toggle", function () {
      thermostat.powerSavingToggle();
      expect(thermostat.powerSaving).toEqual(false);
    });
    it("Checks that power saving mode is on when we use the toggle from off", function () {
      thermostat.powerSavingToggle();
      thermostat.powerSavingToggle();
      expect(thermostat.powerSaving).toEqual(true);
    });
  });

  describe("reset", function () {
    it("resets the temperature to 20 when we have turned the thermostat up", function () {
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("energyUsage", function () {
    it("gives us medium-usage when temperature is between 18-25", function () {
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });
    it("gives us low-usage when temperature is below 18", function () {
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });
    it("gives us high-usage when temperature is above 25", function () {
      thermostat.powerSavingToggle();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });
});
