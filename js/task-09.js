const changeBtn = document.querySelector(`.change-color`);
const colorSpanEl = document.querySelector(`.color`);
const bodyColor = document.body;

changeBtn.addEventListener(`click`, () => {
  const newBodyColor = getRandomHexColor();
  bodyColor.style.backgroundColor = newBodyColor;
  colorSpanEl.textContent = newBodyColor; 
})





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
