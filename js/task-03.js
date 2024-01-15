// Завдання 3

const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

inputElement.addEventListener('input', event => {
  let textContent = event.currentTarget.value.trim();
  outputElement.textContent = textContent ? textContent : 'Anonymous';
});
