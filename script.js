function textGenerator() {
  document.getElementById('meme-text').innerText = document.getElementById('text-input').value;
}

document.getElementById('text-input').addEventListener('keyup', textGenerator);

function loadFile(event) {
  document.getElementById('meme-image').src = URL.createObjectURL(event.target.files[0]);
}

function fireBorder() {
  document.getElementById('meme-image-container').style.border = 'dashed 3px red';
}

function waterBorder() {
  document.getElementById('meme-image-container').style.border = 'double 5px blue';
}

function earthBorder() {
  document.getElementById('meme-image-container').style.border = 'groove 6px green';
}

document.getElementById('fire').addEventListener('click', fireBorder);
document.getElementById('water').addEventListener('click', waterBorder);
document.getElementById('earth').addEventListener('click', earthBorder);
