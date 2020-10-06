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
    it("Use down function three times and see the minimum temperature", function () {
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      expect(thermostat.temperature).toEqual(10);
    });
  });
  describe("maximum temperature with powersaving on is 25 degrees", function () {
    it("Use up function six times and see max temperature", function () {
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      expect(thermostat.temperature).toEqual(25);
    });
  });
  describe("maximum temperature with powersaving off is 32 degrees", function () {
    it("Use up function 13 times and see max temperature", function () {
      thermostat.powerSavingToggle();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      expect(thermostat.temperature).toEqual(32);
    });
  });
});
