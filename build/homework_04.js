"use strict";
function fc() {
    const yearInput = document.querySelector(".year");
    const inputBtn = document.querySelector(".input-btn");
    const result = document.querySelector(".result");
    inputBtn.addEventListener("click", () => {
        let yearValue = +yearInput.value;
        result.innerHTML = "";
        if (yearValue % 400 === 0) {
            result.innerHTML = `${yearValue}是閏年`;
        }
        else if (yearValue % 4 === 0 && yearValue % 100 !== 0) {
            result.innerHTML = `${yearValue}是閏年`;
        }
        else if (yearValue % 4 !== 0) {
            result.innerHTML = `${yearValue}是平年`;
        }
        else if (yearValue % 100 === 0 && yearValue % 400 !== 0) {
            result.innerHTML = `${yearValue}是平年`;
        }
        else {
            result.innerHTML = "請重新輸入";
        }
    });
}
fc();
