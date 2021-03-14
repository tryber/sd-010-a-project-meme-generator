const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const imageUpload = document.getElementById('meme-insert').value;

inputText.addEventListener('keyup', () => {
  memeText.innerHTML = inputText.value;
});

const loadImage = function (event) {
  const imageOut = document.getElementById('meme-image');
  imageOut.src = URL.createObjectURL(event.target.files[0]);
  imageOut.onload = function () {
    URL.revokeObjectURL(imageOut.src);
  }
}
