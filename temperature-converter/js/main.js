/*
1. get number input from user
2. event listener for conversion
3. display all three conversions in dom
*/
const farenheit = document.querySelector(".farenheit");
const celsius = document.querySelector(".celsius");
const kelvin = document.querySelector(".kelvin");
const input = document.querySelector("#userInput");
document.querySelector("#submit").addEventListener("click", convertTemp);

function convertTemp() {
  if (!isFinite(input.value) || input.value === "") {
    return alert("Please enter a number");
  }
  const inputValue = +input.value;
  let fToC = (inputValue - 32) * (5 / 9);
  let fToK = (inputValue - 32) * (5 / 9) + 273.15;
  let cToF = (inputValue * 9) / 5 + 32;
  let cToK = inputValue + 273.15;
  let kToF = ((inputValue - 273.15) * 9) / 5 + 32;
  let kToC = inputValue - 273.15;
  if (farenheit.checked && inputValue > -459.67) {
    document.querySelector("#display").innerHTML = `
      ${inputValue}&#176;F is ${fToC.toFixed(2)}&#176;C and ${fToK.toFixed(2)}K
      `;
  } else if (celsius.checked && inputValue > -273.15) {
    document.querySelector("#display").innerHTML = `
        ${inputValue}&#176;C is 
        ${cToF.toFixed(2)}&#176;F and ${cToK.toFixed(2)}K
        `;
  } else if (kelvin.checked && inputValue >= 0) {
    document.querySelector("#display").innerHTML = `
    ${inputValue}&#176;K is ${kToF.toFixed(2)}&#176;F and ${kToC.toFixed(2)}C
    `;
  } else {
    document.querySelector(
      "#display"
    ).innerHTML = `Scientists said it couldn't get colder than 0K, but it seems you have proved them wrong. The universe has now been thrust into a massive ice age thanks to your reckless behavior!`;
  }
}
