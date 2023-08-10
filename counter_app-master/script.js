const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");
const displayValue = document.getElementById("screen");

decrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
    displayValue.innerText = value - 1;
});

incrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  displayValue.innerText = value + 1;
});

resetBtn.addEventListener("click", () => {
  displayValue.innerText = 0;
});
