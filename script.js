const inputText = document.querySelector('#text-input');

// Requisito 1
inputText.addEventListener('keyup', () => {
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = inputText.value;
});

// Requisito 2
document.querySelector('#meme-insert').addEventListener('change', event => {
  const image = document.querySelector('#meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
  image.onload = () => {
    URL.revokeObjectURL(image.src); // Libera memória
  };
});
