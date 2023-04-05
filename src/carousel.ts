const btnLeft: HTMLButtonElement = document.querySelector(".btn-left")!;
const btnRight: HTMLButtonElement = document.querySelector(".btn-right")!;
const imgs: NodeList = document.querySelectorAll("img");
const spans: NodeList = document.querySelectorAll(".btn-container>span");

let currentImgIndex: number = 0;
btnLeft.addEventListener("click", prevImg);
btnRight.addEventListener("click", nextImg);

function removeClass() {
  let currentImg = imgs[currentImgIndex] as HTMLElement;
  let currentSpan = spans[currentImgIndex] as HTMLElement;
  currentImg.classList.remove("active");
  currentSpan.classList.remove("active");
  return { currentImg, currentSpan };
}
function prevImg() {
  let { currentImg, currentSpan } = removeClass();
  if (currentImgIndex === 0) {
    currentImgIndex = imgs.length - 1;
    currentImg = imgs[currentImgIndex] as HTMLElement;
    currentImg.classList.add("active");
    currentSpan = spans[currentImgIndex] as HTMLElement;
    currentSpan.classList.add("active");
  } else {
    currentImgIndex -= 1;
    currentImg = imgs[currentImgIndex] as HTMLElement;
    currentImg.classList.add("active");
    currentSpan = spans[currentImgIndex] as HTMLElement;
    currentSpan.classList.add("active");
  }
}
function nextImg() {
  let { currentImg, currentSpan } = removeClass();
  if (currentImgIndex === imgs.length - 1) {
    currentImgIndex = 0;
    currentImg = imgs[currentImgIndex] as HTMLElement;
    currentImg.classList.add("active");
    currentSpan = spans[currentImgIndex] as HTMLElement;
    currentSpan.classList.add("active");
  } else {
    currentImgIndex += 1;
    currentImg = imgs[currentImgIndex] as HTMLElement;
    currentImg.classList.add("active");
    currentSpan = spans[currentImgIndex] as HTMLElement;
    currentSpan.classList.add("active");
  }
}
