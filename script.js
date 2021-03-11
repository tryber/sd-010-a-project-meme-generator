const textContainer = document.querySelector('#meme-text');
const textInput = document.querySelector('#text-input');

function addText() {
  const createText = document.createElement('h1');
  createText.innerText = textInput.value;
  if (textContainer.firstElementChild) {
    textContainer.firstElementChild.innerText = textInput.value;
  } else {
    textContainer.appendChild(createText);
  }
}

textInput.addEventListener('keyup', addText);
