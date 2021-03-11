const memeText = document.querySelector('#meme-text');
const textInput = document.querySelector('#text-input');

// Adiciona o texto inserido no #meme-text
function addText() {
  const createText = document.createElement('h1');
  createText.innerText = textInput.value;
  if (memeText.firstElementChild) {
    memeText.firstElementChild.innerText = textInput.value;
  } else {
    memeText.appendChild(createText);
  }
}

textInput.addEventListener('keyup', addText);

// Carrega a imagem selecionadas
const memeImage = document.querySelector('#meme-image');
const memeInsert = document.querySelector('#meme-insert');

memeInsert.addEventListener('change', loadImage);

function loadImage(event) {
  memeImage.src = window.URL.createObjectURL(event.target.files[0]);
}

// Linhas 23 até a linha 25 retirado do link: https://www.codegrepper.com/code-examples/html/input+type=%22file%22+and+display+image
