let body = document.querySelector(".body");
let changeContent = document.querySelector(".js-changeContentButton");
let realizations = document.querySelector(".js-realizations");
let showContent = document.querySelector(".js-showContentButton");
let textButton = document.querySelector(".js-textButton");

changeContent.addEventListener("click", () => {
    body.classList.toggle("secondBackground");
});

showContent.addEventListener("click", () => {
    realizations.classList.toggle("hidden");

    textButton.innerText = realizations.classList.contains("hidden") ? "Pokaż" : "Ukryj";
});
