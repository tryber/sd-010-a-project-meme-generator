function textGenerator() {
  document.getElementById('meme-text').innerText = document.getElementById('text-input').value;
}

document.getElementById('text-input').addEventListener('keyup', textGenerator);

function loadFile(event) {
  document.getElementById('meme-image').src = URL.createObjectURL(event.target.files[0]);
}

document.getElementById('meme-insert').onchange = loadFile;

const containerImage = document.getElementById('meme-image-container');

function fireBorder() {
  containerImage.style.border = 'dashed 3px red';
}

function waterBorder() {
  containerImage.style.border = 'double 5px blue';
}

function earthBorder() {
  containerImage.style.border = 'groove 6px green';
}

document.getElementById('fire').addEventListener('click', fireBorder);
document.getElementById('water').addEventListener('click', waterBorder);
document.getElementById('earth').addEventListener('click', earthBorder);
