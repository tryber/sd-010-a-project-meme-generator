const inputText = document.getElementById('text-input');
const inputImg = document.getElementById('meme-insert');
const btnFire = document.getElementById('fire');
const btnWhater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const containerMemeImage = document.getElementById('meme-image-container');

function textInput() {
  const text = inputText.value;
  const memeText = document.getElementById('meme-text');
  memeText.textContent = text;
}

function imgInput() {
  const memeImage = document.getElementById('meme-image');
  const srcImg = URL.createObjectURL(inputImg.files[0]);
  memeImage.setAttribute('src', srcImg);
}

inputImg.addEventListener('change', imgInput);
inputText.addEventListener('input', textInput);

function changeColorBorder(borderType) {
  if (borderType === 'fire') {
    btnFire.addEventListener('click', () => {
      containerMemeImage.style.cssText = 'border: 3px dashed red';
    });
  } else if (borderType === 'water') {
    btnWhater.addEventListener('click', () => {
      containerMemeImage.style.cssText = 'border: 5px double blue';
    });
  } else if (borderType === 'earth') {
    btnEarth.addEventListener('click', () => {
      containerMemeImage.style.cssText = 'border: 6px groove green';
    });
  }
}

changeColorBorder('fire');
changeColorBorder('water');
changeColorBorder('earth');

const memeContainer = document.getElementById('container-memes');

function changeImgMeme(event) {
  if (event.target.src !== undefined) {
    const memeImage = document.getElementById('meme-image');
    const srcImg = event.target.getAttribute('src');
    memeImage.setAttribute('src', srcImg);
  }
}

memeContainer.addEventListener('click', changeImgMeme);
