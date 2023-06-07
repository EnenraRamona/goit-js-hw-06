const loginFormEl = document.querySelector(`.login-form`);

const emailInputEl = document.querySelector('input[name="email"]');
const passwordInputEl = document.querySelector('input[name="password"]');


loginFormEl.addEventListener(`submit`, (elements) => {
    elements.preventDefault();
    const email = emailInputEl.value;
    const password = passwordInputEl.value;

    if (email === " " && password === " ") {
        alert(`Поля не заповненні`);
    } else {
        const userData = {
            email: email,
            password: password
        };
        console.log(userData);
        loginFormEl.reset();
    }
})
