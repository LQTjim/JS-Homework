function fc() {
  const yearInput: HTMLInputElement = document.querySelector(".year")!;
  const inputBtn: HTMLInputElement = document.querySelector(".input-btn")!;
  const result: HTMLElement = document.querySelector(".result")!;

  inputBtn.addEventListener("click", () => {
    let yearValue = +yearInput.value;
    result.innerHTML = "";
    if (yearValue % 400 === 0) {
      result.innerHTML = `${yearValue}是閏年`;
    } else if (yearValue % 4 === 0 && yearValue % 100 !== 0) {
      result.innerHTML = `${yearValue}是閏年`;
    } else if (yearValue % 4 !== 0) {
      result.innerHTML = `${yearValue}是平年`;
    } else if (yearValue % 100 === 0 && yearValue % 400 !== 0) {
      result.innerHTML = `${yearValue}是平年`;
    } else {
      result.innerHTML = "請重新輸入";
    }
  });
}
fc();
