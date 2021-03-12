const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeImg = document.querySelector('#meme-image');
const memeInsert = document.querySelector('#meme-insert');
const errorMsg = document.querySelector('#error-msg');
const memeImageContainer = document.querySelector('#meme-image-container');

const addEvListener = (elementNode, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const node = document.querySelector(elementNode);
  node.addEventListener(event, fn);
};

const showInputTextInContainer = () => {
  memeText.textContent = inputText.value;
};

const fileReader = (e) => {
  const file = new FileReader();
  if (!e.target.files[0]) {
    return;
  }

  file.onloadstart = () => { memeImg.setAttribute('src', ''); errorMsg.innerHTML = ''; };

  file.onprogress = () => { memeText.textContent = 'Carregando...'; };

  file.onerror = () => { errorMsg.innerHTML = 'Ocorreu um erro inesperado, tente inserir uma imagem novamente.'; };

  file.onloadend = (ev) => {
    memeText.textContent = inputText.value;
    memeImg.setAttribute('src', ev.target.result);
  };

  file.readAsDataURL(e.target.files[0]);
};

const getImage = (imgId) => {
  return document.querySelector(imgId).src;
};

window.onload = () => {
  addEvListener('#text-input', 'keyup', showInputTextInContainer);
  addEvListener('#meme-insert', 'change', fileReader);
  addEvListener('#fire', 'click', () => { memeImageContainer.className = 'border-fire'; });
  addEvListener('#earth', 'click', () => { memeImageContainer.className = 'border-earth'; });
  addEvListener('#water', 'click', () => { memeImageContainer.className = 'border-water'; });
  addEvListener('#meme-1', 'click', () => { memeImg.setAttribute('src', getImage('#meme-1')); });
  addEvListener('#meme-2', 'click', () => { memeImg.setAttribute('src', getImage('#meme-2')); });
  addEvListener('#meme-3', 'click', () => { memeImg.setAttribute('src', getImage('#meme-3')); });
  addEvListener('#meme-4', 'click', () => { memeImg.setAttribute('src', getImage('#meme-4')); });
};
