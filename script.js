const form = document.getElementById('prompt-form');
const subjectInput = document.getElementById('subject');
const styleInput = document.getElementById('style');
const detailsInput = document.getElementById('details');
const promptsContainer = document.getElementById('prompts-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const subject = subjectInput.value;
  const style = styleInput.value;
  const details = detailsInput.value;

  const prompts = generatePrompts(subject, style, details);
  displayPrompts(prompts);
});

function generatePrompts(subject, style, details) {
  const prompts = [];

  // Prompt 1: Basic prompt
  prompts.push(`A ${style} design of a ${subject}.`);

  // Prompt 2: Detailed prompt
  if (details) {
    prompts.push(`A ${style} design of a ${subject}, ${details}.`);
  }

  // Prompt 3: Creative prompt
  prompts.push(`A unique and creative ${style} design of a ${subject}, with a focus on commercial appeal for print-on-demand products.`);

  // Prompt 4: Abstract prompt
  prompts.push(`An abstract ${style} interpretation of a ${subject}.`);

  return prompts;
}

function displayPrompts(prompts) {
  promptsContainer.innerHTML = '';

  prompts.forEach(prompt => {
    const promptElement = document.createElement('div');
    promptElement.classList.add('prompt');
    promptElement.textContent = prompt;
    promptsContainer.appendChild(promptElement);
  });
}
