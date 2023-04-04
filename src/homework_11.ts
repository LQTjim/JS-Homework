/*
 作業8:
 判斷元素值是否為空白，密碼長度是否大於6 /如果長度大於6，判斷是否包含字母、數字、特殊符號
 */
//#region
const input1: HTMLInputElement = document.querySelector("[data-input-1]")!;
const warning1: HTMLElement = document.querySelector("[data-warning-1]")!;
input1.addEventListener("input", () => {
  const regExp1 =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/;
  warning1.classList.remove("correct");
  warning1.classList.remove("in-correct");
  if (regExp1.test(input1.value)) {
    warning1.innerText = "格式正確";
    warning1.classList.add("correct");
  } else {
    warning1.innerText = "格式錯誤";
    warning1.classList.add("in-correct");
  }
});

//#endregion
/*
 作業9:
 使用string物件檢查電子郵件中要有 @ . 以及 @ 不能重複*/

//#region

const input2: HTMLInputElement = document.querySelector("[data-input-2]")!;
const warning2: HTMLElement = document.querySelector("[data-warning-2]")!;
const regExp2 = /^[a-zA-Z0-9]+@{1,}[a-zA-Z]{3,8}\.[a-zA-Z]{2,3}$/;
input2.addEventListener("input", () => {
  warning2.classList.remove("correct");
  warning2.classList.remove("in-correct");
  if (regExp2.test(input2.value)) {
    warning2.innerText = "格式正確";
    warning2.classList.add("correct");
  } else {
    warning2.innerText = "格式錯誤";
    warning2.classList.add("in-correct");
  }
});

//#endregion
/*
作業11:
8位數以上、至少包含一個大寫字母、小寫字母、數字、符號 
  */
//#region
const input3: HTMLInputElement = document.querySelector("[data-input-3]")!;
const warning3: HTMLElement = document.querySelector("[data-warning-3]")!;
const regExp3 =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
input3.addEventListener("input", () => {
  warning3.classList.remove("correct");
  warning3.classList.remove("in-correct");
  if (regExp3.test(input3.value)) {
    warning3.innerText = "格式正確";
    warning3.classList.add("correct");
  } else {
    warning3.innerText = "格式錯誤";
    warning3.classList.add("in-correct");
  }
});
//#endregion
