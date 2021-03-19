const loadFile = function load(e) {
  const img = document.getElementById('output');
  img.src = URL.createObjectURL(e.target.files[0]);
  img.onload = function eraseURL() {
    URL.revokeObjectURL(img.src);
  };
};

function addTextToMeme() {
  const text = document.getElementById('text-input');
  const p = document.createElement('p');
  p.id = 'meme-text';
  const memeContainer = document.getElementById('meme-image-container');
  memeContainer.appendChild(p);
  text.addEventListener('keyup', () => {
    p.innerText = text.value;
  });
}

window.onload = () => {
  addTextToMeme();
};
