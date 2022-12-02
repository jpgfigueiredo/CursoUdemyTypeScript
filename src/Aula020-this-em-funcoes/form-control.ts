import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password1 = document.querySelector('.password1') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const submitEventFn = (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  hideErrorMessages(target);
  checkForCamposVazios(username, email, password1, password2);
  checkEmail(email);
  checkPasswordEquals(password1, password2);
  if (enviarForm(target)) console.log('Enviei meu primeiro Form');
};

form.addEventListener('submit', submitEventFn);

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

function ShowErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = document.querySelector(
    '.error-message',
  ) as HTMLSpanElement;

  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

ShowErrorMessage(username, 'Campo inválido');

function checkForCamposVazios(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) ShowErrorMessage(input, 'Campo não pode ser vazio');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) ShowErrorMessage(input, 'Email inválido');
}

function checkPasswordEquals(
  password1: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password1.value !== password2.value) {
    ShowErrorMessage(password1, 'Senhas não se coincidem');
    ShowErrorMessage(password2, 'Senhas não se coincidem');
  }
}

function enviarForm(form: HTMLFormElement): boolean {
  let send = true;
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach(() => (send = false));
  return send;
}
