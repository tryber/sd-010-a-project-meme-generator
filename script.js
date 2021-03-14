const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const maxChars = document.getElementById('max-chars');
const memeInsert = document.getElementById('meme-insert');
const memeContainer = document.getElementById('meme-image-container');
const imageContainer = document.getElementById('meme-image');

maxChars.innerHTML = 'Max. Chars: 0/60';

inputText.addEventListener('keyup', () => {
  memeText.innerHTML = inputText.value;
  const count = inputText.value.replace(/\s/g, '');
  maxChars.innerHTML = `Max. Chars: ${count.length}/60`;
});

memeInsert.onchange = (event) => {
  imageContainer.src = URL.createObjectURL(event.target.files[0]);
  imageContainer.onload = () => {
    URL.revokeObjectURL(imageContainer.src);
  };
};

function changeBorder() {
  const fire = document.getElementById('fire');
  const water = document.getElementById('water');
  const earth = document.getElementById('earth');
  fire.addEventListener('click', () => {
    memeContainer.style.border = '3px dashed red';
  });
  water.addEventListener('click', () => {
    memeContainer.style.border = '5px double blue';
  });
  earth.addEventListener('click', () => {
    memeContainer.style.border = '6px groove green';
  });
}

function setImageOpt() {
  const image1 = document.getElementById('meme-1');
  const image2 = document.getElementById('meme-2');
  const image3 = document.getElementById('meme-3');
  const image4 = document.getElementById('meme-4');

  image1.addEventListener('click', () => {
    imageContainer.src = image1.src;
  });
  image2.addEventListener('click', () => {
    imageContainer.src = image2.src;
  });
  image3.addEventListener('click', () => {
    imageContainer.src = image3.src;
  });
  image4.addEventListener('click', () => {
    imageContainer.src = image4.src;
  });
}

setImageOpt();
changeBorder();
