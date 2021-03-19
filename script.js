const loadFile = function load(e) {
  const img = document.getElementById('meme-image');
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

function addBorderToMeme() {
  const btn = document.querySelectorAll('button');
  const meme = document.getElementById('meme-image-container');
  for (let index = 0; index < btn.length; index += 1) {
    btn[index].addEventListener('click', () => {
      const border = window.getComputedStyle(btn[index]).border;
      meme.style.border = border;
    });
  }
}

function addImagetoMeme() {
  const imgs = document.querySelectorAll('.meme');
  const img = document.getElementById('meme-image');
  for (let index = 0; index < imgs.length; index += 1) {
    imgs[index].addEventListener('click', () => {
      img.src = imgs[index].src;
    });
  }
}

window.onload = () => {
  addTextToMeme();
  addBorderToMeme();
  addImagetoMeme();
};
