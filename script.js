const paragraph = document.createElement('p');
const memeImageContainer = document.getElementById('meme-image-container')
paragraph.id = 'meme-text';
memeImageContainer.appendChild(paragraph);

const textInput = () => {
  document.getElementById('text-input').addEventListener('input', (e) => {
    paragraph.innerText = e.target.value;
  });
};

const fileReader = (file) => {
  const reader = new FileReader();

  reader.onloadend = (e) => {
    const image = document.getElementById('meme-image');
    image.src = e.target.result;
  };

  reader.readAsDataURL(file);
};

const fileInput = () => {
  document.getElementById('meme-insert').addEventListener('change', (e) => {
    const displayImage = e.target.files[0];
    console.log(displayImage);
    fileReader(displayImage);
  });
};

textInput();
fileInput();

/*
file.onloadend = (ev) => {
    memeText.textContent = inputText.value;
    memeImg.setAttribute('src', ev.target.result);
  };

  file.readAsDataURL(e.target.files[0]);
*/
