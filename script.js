const selectInputText = document.querySelector('#text-input');
const selectDiv = document.querySelector('#meme-image-container');
const selectText = document.querySelector('#meme-text');
const selectInputFile = document.querySelector('#meme-insert');
const selectMemeImage = document.querySelector('#meme-image');

function loadImage() { // consultado o uso desta função em https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
  selectInputFile.addEventListener('change', (event) => {
    selectMemeImage.style.width = '100%';
    selectMemeImage.style.height = '100%';
    selectMemeImage.src = URL.createObjectURL(event.target.files[0]);
    selectMemeImage.onload = () => {
      URL.revokeObjectURL(selectMemeImage.src);
    };
  });
}
loadImage();
