const inputTextField = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

inputTextField.addEventListener('keyup', () => {
  let inputText = inputTextField.value;
  memeText.innerText = inputText;
});

function loadImage(event) {
  let memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function() {
    URL.revokeObjectURL(memeImage.src) //free memory
  }
}
