const form = document.getElementById('form');
const input = document.getElementById('input');
const output = document.getElementById('output');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  output.textContent = input.value;
});
