import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";

const SHOW_ERROR_MESSAGE = "show-error-message";

const form = document.querySelector("#form") as HTMLFormElement;

form.addEventListener("submit", handleSubmit);

function showErrorMessage(input: HTMLInputElement, message: string): void {
    const formFields = input.parentElement as HTMLDivElement;
    const errorMessage = formFields.querySelector(
        ".error-message",
    ) as HTMLSpanElement;
    errorMessage.innerText = message;
    formFields.classList.add(SHOW_ERROR_MESSAGE);
    console.log(message);
}

function hideAllErrorMessages(form: HTMLFormElement): void {
    const allFormFields = form.querySelectorAll("." + SHOW_ERROR_MESSAGE);
    allFormFields.forEach((field) => {
        field.classList.remove(SHOW_ERROR_MESSAGE);
    });
}

function handleSubmit(this: HTMLFormElement, event: SubmitEvent) {
    event.preventDefault();

    let hasError = false;

    const username = document.querySelector("#username") as HTMLInputElement;
    const email = document.querySelector("#email") as HTMLInputElement;
    const password = document.querySelector("#password") as HTMLInputElement;
    const password2 = document.querySelector("#password2") as HTMLInputElement;

    hideAllErrorMessages(this);

    const isValidUsername = checkUsername(username);
    const isValidEmail = checkEmail(email);
    const isValidPassword = checkPassword(password, password2);

    if (!isValidUsername || !isValidEmail || !isValidPassword) {
        hasError = true;
    }

    if (!hasError) form.submit();
}

function checkUsername(input: HTMLInputElement): boolean {
    if (!input.value || input.value.length < 8) {
        showErrorMessage(input, "Usuário deve ter no mínimo 8 caracteres");
        return false;
    }
    return true;
}

function checkEmail(email: HTMLInputElement): boolean {
    if (!isEmail(email.value)) {
        showErrorMessage(email, "E-mail inválido");
        return false;
    }
    return true;
}

function checkPassword(
    password: HTMLInputElement,
    password2: HTMLInputElement,
): boolean {
    const defaultPassword =
        "As senhas devem ter no mínimo 8 caracteres, 1 letra minuscula, 1 letra maiúscula e 1 número";

    if (!password.value || !password2.value) {
        showErrorMessage(password, defaultPassword);
        showErrorMessage(password2, defaultPassword);
        return false;
    } else if (password.value !== password2.value) {
        showErrorMessage(password, "As senhas não conferem");
        showErrorMessage(password2, "As senhas não conferem");
        return false;
    } else if (
        isStrongPassword(password.value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
        })
    ) {
        showErrorMessage(password, defaultPassword);
        showErrorMessage(password2, defaultPassword);
        return false;
    }
    return true;
}
