function celsiusToFahrenheit(celsius) {
    var fahrenheit=(celsius * 9/5) + 32;
    return fahrenheit;
  }
  var celsiusTemperature= 25;
  var convertedTemperature= celsiusToFahrenheit(celsiusTemperature);
  console.log(celsiusTemperature + " degrees Celsius is: " + convertedTemperature + " degrees Fahrenheit.");
  