const inputText = document.querySelector('#text-input');

inputText.addEventListener('keyup', () => {
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = inputText.value;
});

document.querySelector('#meme-insert').addEventListener('click', () => {
  const image = document.querySelector('#meme-insert').files[0].name;
  document.querySelector('#meme-image').src = image;
});
