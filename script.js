const textInput = document.getElementById('text-input');
const textSpan = document.getElementById('meme-text');

function inputText(evt) {
  evt.preventDefault();
  textSpan.innerText = textInput.value;
}

textInput.addEventListener('keyup', inputText);
