const inputText = document.querySelector('#text-input');

inputText.addEventListener('keyup', () => {
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = inputText.value;
});

document.querySelector('#meme-insert').addEventListener('change', (event) => {
  const image = document.querySelector('#meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
});
