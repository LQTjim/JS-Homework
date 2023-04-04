"use strict";
const submit = document.querySelector("#submit");
submit.addEventListener("submit", (e) => {
    e.preventDefault();
    const birthInput = document.querySelector("#birth");
    const result = document.querySelector(".result");
    //這邊的方法不考慮輸入的生日有沒有大於等於或小於今天從而加減1歲
    //#region 方法1
    //   result.innerText = "您今年:&nbsp;&nbsp;&nbsp;&nbsp;歲";
    //   result.innerText = `您今年:${Math.floor(
    //     (new Date().getTime() - new Date(birthInput.value).getTime()) /
    //       1000 /
    //       60 /
    //       60 /
    //       24 /
    //       365
    //   )}歲`;
    //#endregion
    //加入判斷是否大於今天
    //#region 方法2
    /* input輸入進去的原格式是 2023-04-02
  用上述格式 new 出來的時間都會自動從當天的8點計算
  所以用傳進來的input string轉成 2023/04/02的規格
  new 出來的時間就會從00:00:00開始
  */
    const birthString = birthInput.value.replace(/-/g, "/");
    const birth = new Date(birthString);
    const birthYear = birth.getFullYear();
    const birthMonth = birth.getMonth();
    const birthDate = birth.getDate();
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    //當輸入年齡大於現在 表示使用者亂輸入
    if (birth > now) {
        console.log("請輸入正確年齡");
    }
    //當出生年分等於今年表示0歲
    else if (birthYear === year) {
        console.log("0歲");
    }
    //當出生月分大於當前月份  以及 出生月分等於出生月分且出生月分大於現在月份 表示年齡等於現在減去出生年分
    else if (birthMonth > month || (birthMonth === month && birthDate > date)) {
        console.log(year - birthYear - 1);
    }
    //   其餘狀況就是現在年份減去出生年份
    else {
        console.log(year - birthYear);
    }
    //#endregion
});
