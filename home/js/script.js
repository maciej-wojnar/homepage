const body = document.querySelector(".body");
const changeContent = document.querySelector(".js-changeContentButton");
const realizations = document.querySelector(".js-realizations");
const showContent = document.querySelector(".js-showContentButton");
const textButton = document.querySelector(".js-textButton");

changeContent.addEventListener("click", () => {
    body.classList.toggle("secondBackground");
});

showContent.addEventListener("click", () => {
    realizations.classList.toggle("hidden");

    textButton.innerText = realizations.classList.contains("hidden") ? "Pokaż" : "Ukryj";
});
