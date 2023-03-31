let num = Math.random();
let guessNum = Math.floor(num * 100);
console.log(guessNum);
let userNum: string | number = prompt(
  `請輸入猜測的數字(1~100)，輸入0離開遊戲`
)!;

while (guessNum !== userNum) {
  if (+userNum === 0) {
    break;
  } else if (userNum === "") {
    userNum = prompt(`請輸入猜測的數字(1~100)，輸入0離開遊戲 >=${userNum}`)!;
    continue;
  } else if (guessNum < +userNum) {
    alert("數字太大!");
    userNum = prompt(`請輸入猜測的數字(1~100)，輸入0離開遊戲 >=${userNum}`)!;
    continue;
  } else if (guessNum > +userNum) {
    alert("數字太小!");
    userNum = prompt(`請輸入猜測的數字(1~100)，輸入0離開遊戲 <=${userNum}`)!;
    continue;
  } else {
    userNum = prompt(`請輸入猜測的數字(1~100)，輸入0離開遊戲`)!;
    continue;
  }
}
if (userNum === guessNum) {
  alert("猜對了!");
}
alert("遊戲結束");
document.write("遊戲結束了!");
