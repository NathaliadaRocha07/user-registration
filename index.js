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

const registerButton = document.getElementById('register-button');
const message = document.getElementById('message');

registerButton.addEventListener('click', () => {
    if (isFormValid()) {
        message.style.display = 'block';
    }

const accessToken = 'IGQWROZA0lGOGE2ZAnk3YzlRSzhJbnBuV1RYVi1GSjYzaUkyd3FZAdGg3eThVbWRuZAUkxeWttN2x0QU1HanBoZA0xpYUlMWDZALODZAXd0FFeXhYRHpRXzBVV3RzMTRTT0Q3RzZA3bXM4ZAVQ5Nnp2bGpLSXpqYXpualoyS0kZD';
const url = 'https://graph.instagram.com/me?fields=id,username&access_token=' + accessToken;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log('Informações do perfil:', data);
    })
    .catch(error => console.error('Erro ao fazer a solicitação:', error));
});

