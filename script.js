const inputText = document.querySelector('#text-input');

inputText.addEventListener('keyup', () => {
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = inputText.value;
});

const loadFile = (event) => {
	const image = document.querySelector('#meme-image');
	image.src = URL.createObjectURL(event.target.files[0]);
};
