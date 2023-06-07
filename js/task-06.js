

const inputEl = document.querySelector(`#validation-input`);


inputEl.addEventListener(`blur`, (event) => {
    if (Number(event.currentTarget.value.length) === Number(inputEl.dataset.length)) {
        inputEl.classList.remove(`invalid`);
        inputEl.classList.add(`valid`);
        
    } else if (Number(event.currentTarget.value.length) != Number(inputEl.dataset.length)) {
        inputEl.classList.remove(`valid`);
        inputEl.classList.add(`invalid`);
    } 
})

// console.log(inputEl.dataset.length);