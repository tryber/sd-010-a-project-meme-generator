function addTextToMeme() {
  const text = document.getElementById('text-input');
  const p = document.createElement('p');
  p.id = 'meme-text';
  const memeContainer = document.getElementById('meme-image-container');
  memeContainer.appendChild(p);
  text.addEventListener('keyup', () => {
    p.innerText = text.value;
  })
}

window.onload = () => {
  addTextToMeme();
};