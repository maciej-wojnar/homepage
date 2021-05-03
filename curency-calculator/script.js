{

  const formElement = document.querySelector(".js-form");
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const rateEurElement = document.querySelector(".js-rateEur");
    const rateUsdElement = document.querySelector(".js-rateUsd");
    const rateGbpElement = document.querySelector(".js-rateGbp");
    const exchangeElement = document.querySelector(".js-exchange");

    const amountPlnElement = document.querySelector(".js-amountPln");
    const selectedCurrencyElement = document.querySelector(".js-selectedCurrency");

    const calculateExchange = (amountPln, selectedCurrency) => {
      const rateEur = rateEurElement.value;
      const rateUsd = rateUsdElement.value;
      const rateGbp = rateGbpElement.value;
      switch (selectedCurrency) {
        case "EUR":
          return amountPln / rateEur;
        case "USD":
          return amountPln / rateUsd;
        case "GBP":
          return amountPln / rateGbp;
      }
    }
    const amountPln = amountPlnElement.value;
    const selectedCurrency = selectedCurrencyElement.value;

    const exchange = calculateExchange(amountPln, selectedCurrency)
    exchangeElement.innerText = `${exchange.toFixed(2)} ${selectedCurrency}`;

  });

  const showRateTable = () => {
    realizations.classList.toggle("hidden");

    textButton.innerText = realizations.classList.contains("hidden") ? "Pokaż" : "Ukryj";
  }
  const showContent = document.querySelector(".js-showContentButton");
  const realizations = document.querySelector(".js-exchangeRate");
  const textButton = document.querySelector(".js-textButton");
  showContent.addEventListener("click", showRateTable);

}