const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault();

    const username = loginButton.value;
    console.log('username', username);
}

loginForm.addEventListener("submit", onLoginSubmit)