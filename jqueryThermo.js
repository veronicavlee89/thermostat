$(document).ready(function () {
  var thermostat = new Thermostat();
  updateTemperature();

  $("#temperature-up").click(function () {
    thermostat.up();
    updateTemperature();
  });

  $("#temperature-down").click(function () {
    thermostat.down();
    updateTemperature();
  });

  $("#temperature-reset").click(function () {
    thermostat.reset();
    updateTemperature();
  });

  $("#powersaving-toggle").click(function () {
    thermostat.powerSavingToggle();
    $("#power-saving-status").text(thermostat.psStatus());
    updateTemperature();
  });

  function updateTemperature() {
    $("#temperature").text(thermostat.temperature);
  }

  $("#city").submit(function (event) {
    event.preventDefault();
    let city = $("#picked-city").val();
    console.log(city);
    $.get(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=16f42bf1b7c2d1ff6c5fba304885dc11",
      function (data) {
        $("#outside-temperature").text(Math.floor(data.main.temp - 273.15));
      }
    );
  });
  /*
  $.get(
    "http://api.openweathermap.org/data/2.5/weather?q=london&appid=16f42bf1b7c2d1ff6c5fba304885dc11",
    function (data) {
      $("#outside-temperature").text(Math.floor(data.main.temp - 273.15));
    }
  );*/
});
