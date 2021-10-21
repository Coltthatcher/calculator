function add(number1, number2){
  return number1 + number2;
}
function subtract(number1, number2){
  return number1 - number2;
}
function twoTimes(number1, number2){
  return number1 * number2;
}
function threeTimes(number1, number2, number3)
{
  return number1 * number2 * number3; 
}
function divideTwo(number1, number2){
  return number1 / number2;
}
function remainder(number1, number2){
  return number1 % number2;
}
function celsiusToFahrenheit(number){
  number *- 1.8;
  number +- 32;
  return number;
}
function fahrenheitToCelsius(number){
  number -=32;
  number *=.5556;
  return number;
}

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });
});