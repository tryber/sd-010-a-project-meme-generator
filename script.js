const inputTextField = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeContainer = document.getElementById('meme-image-container');

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

const fireBtn = document.getElementById('fire');
fireBtn.addEventListener('click', () => {
  memeContainer.style.border = '3px dashed red'
});

const waterBtn = document.getElementById('water');
waterBtn.addEventListener('click', () => {
  memeContainer.style.border = '5px double blue'
});

const earthBtn = document.getElementById('earth');
earthBtn.addEventListener('click', () => {
  memeContainer.style.border = '6px groove green'
});