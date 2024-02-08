function onChangeEmail() {
    toggleButtonsDisable();
}

function onChangePassword() {
    toggleButtonsDisable();
}

function login() {
    window.location.href = "pages/home/home.html"
}

function register() {
    window.location.href = "pages/register/register.html"
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    const password = isPasswordValid();
    document.getElementById('login-button').disabled = !emailValid || !password;
}

function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true;
}

const form  = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password')
};
