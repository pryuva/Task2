    function convertTemperature() {
      var celsius = document.getElementById("celsius").value;
      var fahrenheit = (celsius * 9/5) + 32;
      document.getElementById("fahrenheit").value = fahrenheit;
      document.getElementById("result").innerHTML = celsius + "°C is equal to " + fahrenheit + "°F";
    }
  