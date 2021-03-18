function getTextFromInput() {
  const textMemeInputElement = document.getElementById('text-input');
  const textMemeElement = document.getElementById('meme-text');

  textMemeInputElement.oninput = () => {
    textMemeElement.innerHTML = textMemeInputElement.value;
  };
}

function uploadImage() {
  const fileInputElement = document.getElementById('meme-insert');
  const imageMemeInputElement = document.getElementById('meme-image');

  fileInputElement.onchange = () => {
    // reference: https://stackoverflow.com/questions/15201071/how-to-get-full-path-of-selected-file-on-change-of-input-type-file-using-jav
    const imageUrl = URL.createObjectURL(fileInputElement.files[0]);
    imageMemeInputElement.src = imageUrl;
  };
}

window.onload = () => {
  getTextFromInput();
  uploadImage();
};
