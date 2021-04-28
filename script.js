const textInput = () => {
  document.getElementById('text-input').addEventListener('input', (event) => {
    document.getElementById('meme-text').innerText = event.target.value;
  });
};

textInput();

const loadImg = (img) => {
  const reader = new FileReader();
  reader.onloadend = (event) => {
    document.getElementById('meme-image')
      .src = event.target.result;
  };
  reader.readAsDataURL(img);
};

const imgInput = () => {
  const getImgInput = document.getElementById('meme-insert');
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
  getImgInput.addEventListener('change', (event) => {
    loadImg(event.target.files[0]);
  });
};

imgInput();
