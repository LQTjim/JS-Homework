"use strict";
const scoreContainer = document.querySelector(".score-container");
const stars = document.querySelectorAll("[data-index]");
const starResult = document.querySelector(".star-result");
scoreContainer.addEventListener("click", (e) => {
    starResult.innerText = "";
    stars.forEach((el) => {
        el.classList.remove("active");
    });
    const dataScore = e.target;
    const starIndex = +dataScore.getAttribute("data-index");
    stars[starIndex].classList.add("active");
    starResult.innerText = `你評分是:${starIndex + 1}顆星`;
});
