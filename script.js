const inputTextField = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

inputTextField.addEventListener('keyup', () => {
  let inputText = inputTextField.value;
  memeText.innerText = inputText;
})

