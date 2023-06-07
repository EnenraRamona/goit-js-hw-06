
const buttonDecrement = document.querySelector('[data-action="decrement"]')
const buttonIncrement = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector(`#value`);

let counter = 0;
counterValue.textContent = counter;

buttonDecrement.addEventListener(`click`, () => {
    counter--;
    counterValue.textContent = counter;
});

buttonIncrement.addEventListener(`click`, () => {
    counter++;
    counterValue.textContent = counter;
});