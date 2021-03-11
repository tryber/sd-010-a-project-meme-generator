function textOnImage() {
  const textInput = document.querySelector('#text-input');
  const textImage = document.querySelector('#meme-text');
  textImage.innerText = textInput.value;
}

const textImage = document.querySelector('#text-input');
textImage.addEventListener('keyup', textOnImage);
