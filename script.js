function generateText() {
  const inputValue = document.querySelector('#text-input');
  const memeText = document.querySelector('#meme-text');

  inputValue.addEventListener('keyup', () => {
    memeText.innerText = inputValue.value;
  });
}

function addImg() {
  const imgInput = document.getElementById('meme-insert');
  const inputBtn = document.getElementById('submit');
  const memeImg = document.getElementById('meme-image');

  inputBtn.addEventListener('click', () => {
    memeImg.src = URL.createObjectURL(imgInput.files[0]);
  });
}

window.onload = () => {
  generateText();
  addImg();
};
