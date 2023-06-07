const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector(`#ingredients`);
ingredients.forEach((ingredient) => {
  const inEl = document.createElement(`li`);
  inEl.textContent = ingredient;
  inEl.classList.add(`item`);
  ulEl.appendChild(inEl);
  console.log(ulEl);
});