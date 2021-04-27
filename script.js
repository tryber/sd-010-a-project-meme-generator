function putText() {
  const textBox = document.getElementById('text-input');
  textBox.addEventListener('keyup', () => {
    const getParagraph = document.getElementById('meme-text');
    getParagraph.innerText = textBox.value;
  });
}

function putImage() {
  const getBtn = document.getElementById('meme-insert');
  getBtn.addEventListener('click', () => {
    const image = document.getElementById('meme-insert').files[0].name;
    document.getElementById('meme-image').src = image;
  });
}

function frameListeners() {
  const getBorder = document.getElementById('meme-image-container');
  document.getElementById('fire').addEventListener('click', () => {
    getBorder.style.border = '3px dashed red';
  });
  document.getElementById('water').addEventListener('click', () => {
    getBorder.style.border = '5px double blue';
  });
  document.getElementById('earth').addEventListener('click', () => {
    getBorder.style.border = '6px groove green';
  });
}

function putDefaultImgs() {
  const getBox = document.getElementById('meme-image');
  const getMeme1 = document.getElementById('meme-1');
  getMeme1.addEventListener('click', () => {
    getBox.src = './imgs/meme1.png';
  });
  const getMeme2 = document.getElementById('meme-2');
  getMeme2.addEventListener('click', () => {
    getBox.src = './imgs/meme2.png';
  });
  const getMeme3 = document.getElementById('meme-3');
  getMeme3.addEventListener('click', () => {
    getBox.src = './imgs/meme3.png';
  });
  const getMeme4 = document.getElementById('meme-4');
  getMeme4.addEventListener('click', () => {
    getBox.src = './imgs/meme4.png';
  });
}

window.onload = () => {
  putText();
  frameListeners();
  putImage();
  putDefaultImgs();
};
