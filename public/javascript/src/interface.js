$(document).ready(function () {
  var thermostat = new Thermostat();
  updateTemperature();

  $("#temperature-up").click(function () {
    let currentTemperature = parseInt($('#temperature').text())
    thermostat.up(currentTemperature, updateTemperature);
  });

  $("#temperature-down").click(function () {
    let currentTemperature = parseInt($('#temperature').text())
    thermostat.down(currentTemperature, updateTemperature);
  });

  $("#temperature-reset").click(function () {
    thermostat.reset(updateTemperature);
  });

  $("#powersaving-toggle").click(function () {
    thermostat.powerSavingToggle();
    $("#power-saving-status").text(thermostat.psStatus());
    updateTemperature();
  });

  function updateTemperature() {
    thermostat.getCurrentTemperature(function(data) {
      $('#temperature').text(data.temperature);

      if(thermostat.energyUsage(data.temperature) === 'low-usage') {
        $('#circle').css('background', 'green')
      } else if(thermostat.energyUsage(data.temperature) === 'medium-usage') {
        $('#circle').css('background', 'black')
      } else {
        $('#circle').css('background', 'red')
      }
    });
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
});
