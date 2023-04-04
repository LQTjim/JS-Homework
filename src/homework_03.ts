let guessNum = Math.floor(Math.random() * 100);
console.log("作弊用:", guessNum);
const userNum: HTMLInputElement = document.querySelector("[data-user-input]")!;
const restartBtn: HTMLInputElement = document.querySelector("[data-restart]")!;
const result: HTMLElement = document.querySelector(".result")!;

userNum.addEventListener("keydown", (e) => {
  const userNumValue = userNum.value;
  if (e.key === "Enter") {
    console.log(userNumValue);
    if (+userNumValue === 0) {
      result.innerText = "遊戲結束";
      userNum.disabled = true;
    } else if (+userNumValue > guessNum) {
      result.innerText = `請輸入猜測的數字(1~100)，輸入0離開遊戲,${userNumValue}太大!`;
    } else if (+userNumValue < guessNum) {
      result.innerText = `請輸入猜測的數字(1~100)，輸入0離開遊戲,${userNumValue}太小!`;
    } else if (+userNumValue === guessNum) {
      result.innerText = `猜對了! 遊戲結束`;
      userNum.disabled = true;
    } else {
      result.innerText = `請輸入猜測的數字(1~100)，輸入0離開遊戲`;
    }
  } else return;
});
restartBtn.addEventListener("click", () => {
  userNum.disabled = false;
  guessNum = Math.floor(Math.random() * 100);
  console.log("作弊用:", guessNum);
  result.innerText = "";
});
