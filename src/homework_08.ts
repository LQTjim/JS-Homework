function passwordChecker() {
  //取得idPwd元素
  const idPwd: HTMLInputElement = document.querySelector("#pwdCheck")!;
  idPwd.addEventListener("input", checkPwd);
  function checkPwd() {
    //取得idPwd元素值
    const password = idPwd.value;
    const warning: HTMLElement = document.querySelector(".warning")!;
    let containSpecial = false;
    let containatoz = false;
    let containAtoZ = false;
    let containNumber = false;
    warning.innerText = "";
    warning.classList.remove("correct");
    warning.classList.remove("in-correct");
    //不要用REGEXP
    //判斷元素值是否為空白，密碼長度是否大於6

    if (password === "" || password.length <= 6) {
      warning.innerText = "密碼不得為空,密碼需大於6個字";
      warning.classList.add("in-correct");
      return;
    }
    //如果長度大於6，判斷是否包含字母、數字、特殊符號 !@#$%^&*
    //!33,@64,#35,$36,%37,^94,&38,*42
    //a-z 97-122
    //A-Z 65-90
    //1-9 48-57
    for (let i = 0, max = password.length; i < max; i++) {
      const currentChar = password[i].charCodeAt(0);
      if (currentChar === 33) {
        containSpecial = true;
      } else if (currentChar === 64) {
        containSpecial = true;
      } else if (currentChar === 35) {
        containSpecial = true;
      } else if (currentChar === 36) {
        containSpecial = true;
      } else if (currentChar === 37) {
        containSpecial = true;
      } else if (currentChar === 94) {
        containSpecial = true;
      } else if (currentChar === 38) {
        containSpecial = true;
      } else if (currentChar === 42) {
        containSpecial = true;
      } else if (97 <= currentChar && currentChar <= 122) {
        containatoz = true;
      } else if (65 <= currentChar && currentChar <= 90) {
        containAtoZ = true;
      } else if (48 <= currentChar && currentChar <= 57) {
        containNumber = true;
      }
    }
    //若跑完迴圈 沒有 特殊字元
    if (!containSpecial) {
      warning.innerText = "密碼須包含特殊字元!@#$%^&*";
      warning.classList.add("in-correct");
    } else if (!containatoz && !containAtoZ) {
      warning.innerText = "密碼須包含字母";
      warning.classList.add("in-correct");
    } else if (!containNumber) {
      warning.innerText = "密碼須包含數字";
      warning.classList.add("in-correct");
    } else {
      warning.innerText = "密碼符合格式";
      warning.classList.add("correct");
    }
  }
}
passwordChecker();
