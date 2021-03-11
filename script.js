function textGenerator() {
  document.getElementById('meme-text').innerText = document.getElementById('text-input').value;
}

document.getElementById('text-input').addEventListener('keyup', textGenerator);

function loadFile(event) {
  document.getElementById('meme-image').src = URL.createObjectURL(event.target.files[0]);
}
