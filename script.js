function textGenerator() {
  document.getElementById('meme-text').innerText = document.getElementById('text-input').value;
}

document.getElementById('text-input').addEventListener('keyup', textGenerator);
