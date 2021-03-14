const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const imageUpload = document.getElementById('meme-insert').value;
const containerMeme = document.getElementById('meme-image-container');
let imageOut = document.getElementById('meme-image');

inputText.addEventListener('keyup', () => {
  memeText.innerHTML = inputText.value;
});

let loadImage = function (event) {
  imageOut.src = URL.createObjectURL(event.target.files[0]);
  imageOut.onload = function () {
    URL.revokeObjectURL(imageOut.src);
  }
  imageOut.style.objectFit = 'cover';
}

console.log(containerMeme);
