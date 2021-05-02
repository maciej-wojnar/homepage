const amountPlnElement = document.querySelector(".js-amountPln");
const rateEurElement = document.querySelector(".js-rateEur");
const rateUsdElement = document.querySelector(".js-rateUsd");
const rateGbpElement = document.querySelector(".js-rateGbp");
const rateChfElement = document.querySelector(".js-rateChf");
const formElement = document.querySelector(".js-form");
const exchangeElement = document.querySelector(".js-exchange");
const selectedCurrencyElement = document.querySelector(".js-selectedCurrency");

const realizations = document.querySelector(".js-exchangeRate");
const showContent = document.querySelector(".js-showContentButton");
const textButton = document.querySelector(".js-textButton");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const amountPln = amountPlnElement.value;
  const rateEur = rateEurElement.value;
  const rateUsd = rateUsdElement.value;
  const rateGbp = rateGbpElement.value;
  const selectedCurrency = selectedCurrencyElement.value;


  switch (selectedCurrency) {
    case "EUR":
      exchange = amountPln / rateEur;
      break;
    case "USD":
      exchange = amountPln / rateUsd;
      break;
    case "GBP":
      exchange = amountPln / rateGbp;
      break;
    default:
      console.log("Woops. Something went wrong!");
      break;
  }
  
  exchangeElement.innerText = `${exchange.toFixed(2)} ${selectedCurrency}`;
  
});


showContent.addEventListener("click", () => {
  realizations.classList.toggle("hidden");

  textButton.innerText = realizations.classList.contains("hidden") ? "Pokaż" : "Ukryj";
});