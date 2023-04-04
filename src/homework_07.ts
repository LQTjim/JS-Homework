// function temperatureCalculator() {
const celsiusInput: HTMLInputElement = document.querySelector("#celsius")!;
const fahrenheitInput: HTMLInputElement =
  document.querySelector("#fahrenheit")!;
const fahrenheitResult = document.querySelector(".fahrenheit-result");
const celsiusResult = document.querySelector(".celsius-result");
celsiusInput.addEventListener("change", () => {
  // fahrenheitResult.innerHTML = "換算結果:";
  if (celsiusInput.value === "") {
    return;
  }
  fahrenheitInput.value = toF(+celsiusInput.value);
  // fahrenheitResult.innerHTML += `華氏:${toF(+celsiusInput.value)}°F`;
});
fahrenheitInput.addEventListener("change", () => {
  if (fahrenheitInput.value === "") {
    return;
  }
  celsiusInput.value = toC(+fahrenheitInput.value);
});
function toF(C: number) {
  return (C * (9 / 5 + 32)).toFixed(2);
}
function toC(F: number) {
  return (((F - 32) * 5) / 9).toFixed(2);
}
// }
// temperatureCalculator();
