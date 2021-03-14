const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

inputText.addEventListener('keyup', () => {
  memeText.innerHTML = inputText.value;
});
