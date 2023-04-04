"use strict";
function emailChecker() {
    const emailCheck = document.querySelector("#emailCheck");
    const validation = document.querySelector(".validation");
    /*
  解題思路
  str.indexOf() 測試字串是否包含"@"或"."
  1.用str.lastIndexOf()檢查最後一個是否和第一個重複
  2.同時要確定lastIndexOf()返回不能為-1(這個條件和indexOf("@") === -1重複 故刪除)
  */
    emailCheck.addEventListener("input", () => {
        validation.classList.remove("in-correct");
        validation.classList.remove("correct");
        validation.innerText = "";
        if (emailCheck.value.indexOf("@") === -1 ||
            emailCheck.value.indexOf(".") === -1 ||
            emailCheck.value.lastIndexOf("@") !== emailCheck.value.indexOf("@")) {
            validation.innerText = "電子郵件中要有@.以及@不能重複";
            validation.classList.add("in-correct");
        }
        else {
            validation.innerText = "格式正確";
            validation.classList.add("correct");
        }
    });
}
emailChecker();
