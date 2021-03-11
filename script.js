function textOnImage() {
  const textInput = document.querySelector('#text-input');
  const textImage = document.querySelector('#meme-text');
  textImage.innerText = textInput.value;
}

const textImage = document.querySelector('#text-input');
textImage.addEventListener('keyup', textOnImage);

function insertButton() {
  const insert = document.querySelector('#meme-insert');
  const image = document.querySelector('#meme-image img');
  image.src = URL.createObjectURL(insert.files[0]);
}

const insert = document.querySelector('#meme-insert');
insert.addEventListener('change', insertButton);
