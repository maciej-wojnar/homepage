{

  const formElement = document.querySelector(".js-form");
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    
      const amountPlnElement = document.querySelector(".js-amountPln");
      const selectedCurrencyElement = document.querySelector(".js-selectedCurrency");

      const rateEurElement = document.querySelector(".js-rateEur");
      const rateUsdElement = document.querySelector(".js-rateUsd");
      const rateGbpElement = document.querySelector(".js-rateGbp");
      const exchangeElement = document.querySelector(".js-exchange");
{
      const calculateExchange = (amount, currency) => {
        const rateEur = rateEurElement.value;
        const rateUsd = rateUsdElement.value;
        const rateGbp = rateGbpElement.value;
        switch (currency) {
          case "EUR":
            return amount / rateEur;
          case "USD":
            return amount / rateUsd;
          case "GBP":
            return amount / rateGbp;
        }
      }
      const amount = amountPlnElement.value;
      const currency = selectedCurrencyElement.value;

      const exchange = calculateExchange(amount, currency)
      exchangeElement.innerText = `${exchange.toFixed(2)} ${currency}`;
  }
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