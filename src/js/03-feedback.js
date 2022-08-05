import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const stringInfo = localStorage.getItem('feedback-form-state');
if (stringInfo) {
  const objectInfo = JSON.parse(stringInfo);
  const { email, message } = form.elements;
  email.value = objectInfo.email;
  message.value = objectInfo.message;
}

form.addEventListener('input', throttle(onInputForm, 500));
function onInputForm(event) {
  const { email, message } = form.elements;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: email.value, message: message.value })
  );
  console.log(`email: ${email.value},message: ${message.value}`);
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const { email, message } = form.elements;
  if (email.value !== '' && message.value !== '') {
    console.log({ email: email.value, message: message.value });
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
});
