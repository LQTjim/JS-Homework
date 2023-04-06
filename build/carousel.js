"use strict";
const container = document.querySelector(".container");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const imgs = document.querySelectorAll("img");
const spans = document.querySelectorAll(".btn-container>span");
let flag = false;
let currentImgIndex = 0;
container.addEventListener("mouseenter", () => {
    flag = true;
});
container.addEventListener("mouseleave", () => {
    flag = false;
});
btnLeft.addEventListener("click", prevImg);
btnRight.addEventListener("click", nextImg);
spans.forEach((el) => {
    const span = el;
    span.addEventListener("click", () => {
        let { currentImg, currentSpan } = removeClass();
        currentImgIndex = +span.getAttribute("data-index");
        currentImg = imgs[currentImgIndex];
        currentImg.classList.add("active");
        currentSpan = spans[currentImgIndex];
        currentSpan.classList.add("active");
    });
});
setInterval(() => {
    if (!flag)
        nextImg();
}, 1500);
function removeClass() {
    let currentImg = imgs[currentImgIndex];
    let currentSpan = spans[currentImgIndex];
    currentImg.classList.remove("active");
    currentSpan.classList.remove("active");
    return { currentImg, currentSpan };
}
function prevImg() {
    let { currentImg, currentSpan } = removeClass();
    if (currentImgIndex === 0) {
        currentImgIndex = imgs.length - 1;
        currentImg = imgs[currentImgIndex];
        currentImg.classList.add("active");
        currentSpan = spans[currentImgIndex];
        currentSpan.classList.add("active");
    }
    else {
        currentImgIndex -= 1;
        currentImg = imgs[currentImgIndex];
        currentImg.classList.add("active");
        currentSpan = spans[currentImgIndex];
        currentSpan.classList.add("active");
    }
}
function nextImg() {
    let { currentImg, currentSpan } = removeClass();
    if (currentImgIndex === imgs.length - 1) {
        currentImgIndex = 0;
        currentImg = imgs[currentImgIndex];
        currentImg.classList.add("active");
        currentSpan = spans[currentImgIndex];
        currentSpan.classList.add("active");
    }
    else {
        currentImgIndex += 1;
        currentImg = imgs[currentImgIndex];
        currentImg.classList.add("active");
        currentSpan = spans[currentImgIndex];
        currentSpan.classList.add("active");
    }
}
