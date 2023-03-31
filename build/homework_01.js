"use strict";
function BMI() {
    const form = document.querySelector(".form");
    const warning = document.querySelector(".warning");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formInputKg = document.querySelector(".form-input-kg");
        const formInputM = document.querySelector(".form-input-m");
        const formInputKgValue = +formInputKg.value;
        const formInputMValue = +formInputM.value;
        const BMIResult = document.querySelector(".BMI-result");
        const BMI = (formInputKgValue / formInputMValue ** 2).toFixed(2);
        BMIResult.innerHTML = `您的BMI為:${BMI}`;
        warning.innerHTML = "";
        if (+BMI < 18.5) {
            warning.innerHTML += "過輕";
        }
        else if (+BMI < 24) {
            warning.innerHTML += "正常";
        }
        else if (+BMI < 27) {
            warning.innerHTML += "過重";
        }
        else if (+BMI < 30) {
            warning.innerHTML += "輕度肥胖";
        }
        else if (+BMI < 35) {
            warning.innerHTML += "中度肥胖";
        }
        else if (+BMI >= 35) {
            warning.innerHTML += "重度肥胖";
        }
        else {
            warning.innerHTML += "????";
        }
    });
}
BMI();
