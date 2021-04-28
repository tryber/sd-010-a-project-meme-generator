const getInputTxt = document.getElementById('text-input');
const getImgInput = document.getElementById('meme-insert');
const getStyle = document.querySelectorAll('.btn-style');
const getMemeImg = document.querySelectorAll('#img-meme img');
const createP = document.createElement('p');
createP.id = 'meme-text';
const getImgDiv = document.getElementById('meme-image-container');
getImgDiv.appendChild(createP);
getImgDiv.style.border = 'solid black 1px';

const textInput = () => {
  getInputTxt.addEventListener('input', (event) => {
    createP.innerText = event.target.value;
  });
};

textInput();

const imgRead = (img) => {
  const reader = new FileReader();
  reader.onloadend = (event) => {
    const image = document.getElementById('meme-image');
    image.src = event.target.result;
  };
  // https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader/readAsDataURL
  reader.readAsDataURL(img);
};

const uploadImg = () => {
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
  getImgInput.addEventListener('change', (event) => {
    const displayImage = event.target.files[0];
    imgRead(displayImage);
  });
};

uploadImg();

const optionalStyles = () => {
  getStyle.forEach((event) => {
    event.addEventListener('click', (button) => {
      const idName = button.target.id;
      getImgDiv.style.border = '';
      getImgDiv.className = `${idName}-style`;
    });
  });
};

optionalStyles();

const renderImage = () => {
  getMemeImg.forEach((event) => {
    event.addEventListener('click', (img) => {
      const memeImg = img.target;
      const renderizedMeme = document.querySelector('#meme-image');
      renderizedMeme.src = memeImg.src;
    });
  });
};

renderImage();
