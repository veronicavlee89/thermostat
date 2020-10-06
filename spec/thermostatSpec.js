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
});
