
const inputEl = document.querySelector(`#name-input`);
const spanNameEl = document.querySelector(`#name-output`);

inputEl.addEventListener(`input`, (e) => {
    spanNameEl.textContent = e.target.value === "" ? " Anonymous" : e.target.value;
});

