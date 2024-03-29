// Завдання 4

const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const result = { email, password };
  console.log(result);
  form.reset();
});
