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

const instagramLoginButton = document.getElementById('instagram-login-button');

instagramLoginButton.addEventListener('click', () => {
    window.location.href = "https://www.instagram.com/oauth/authorize?client_id=7533903633314856&redirect_uri=https://nathaliadarocha07.github.io/user-registration/&response_type=token";
});

const accessToken = "IGQWRNb2ItdkNnU1VPdHliYVNVMElGandzWkRrVFFuWDNjZAUhFN2tseGFadlFnT3Nrd1FzNEpFNHlJNXN1ci0zUVZAlQ3I1NWhFZAlJETWwtellNRnNtN0FvVkl5VmRIY1otcDlpXzJRTi1Mcjg4SHVGRnJhRjJqanMZD";
const url = 'https://graph.instagram.com/me?fields=id,username&access_token='+accessToken;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log('Informações do perfil:',data);
    })
    .catch(error => console.error('Erro ao fazer a solicitação:',error));