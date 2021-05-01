let valueElement = document.querySelector(".js-Value");
let euroResult = document.querySelector(".js-EuroResult");
let dollarResult = document.querySelector(".js-DollarResult");
let poundResult = document.querySelector(".js-PoundResult");
let form = document.querySelector(".js-Form");
let form__reset = document.querySelector(".reset");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let pln = valueElement.value;
  let euroRate = pln / 4.55;
  let dollarRate = pln / 3.77;
  let poundRate = pln / 5.27;
  euroResult.innerText = euroRate.toFixed(2) + " €";
  dollarResult.innerText = dollarRate.toFixed(2) + " $";
  poundResult.innerText = poundRate.toFixed(2) + " £";
});