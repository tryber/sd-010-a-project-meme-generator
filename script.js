const memeText = document.querySelector('#meme-text');
const textInput = document.querySelector('#text-input');

// referência : https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
textInput.addEventListener('input', (e) => {
  memeText.innerHTML = e.target.value;
});
