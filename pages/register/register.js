function onChangeEmail() {
    toggleRegisterButtonDisable();
}

function onChangePassword() {
    validatePasswordsMatch();
}

function onChangeConfirmPassword() {
    validatePasswordsMatch();
}

function validatePasswordsMatch() {
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;
    
    const passwordsMatch = password === confirmPassword;
    toggleRegisterButtonDisable();
}

function toggleRegisterButtonDisable() {
    form.registerButton().disabled = !isFormValid();
}

function isFormValid() {
    const email = form.email().value;
    if (!email || !validateEmail(email)) {
        return false;
    }

    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;
    if (password !== confirmPassword) {
        return false;
    }

    return true;
}

const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    confirmPassword: () => document.getElementById('confirmPassword'),
    registerButton: () => document.getElementById('register-button')
}