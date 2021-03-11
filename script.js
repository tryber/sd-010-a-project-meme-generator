const memeTextoInput = document.querySelector('#text-input');
const memeTexto = document.querySelector('#meme-text');
const memeImagem = document.querySelector('#meme-image');
const memeImagemInput = document.querySelector('#meme-insert');

function escreverTextoNoMeme() {
  const textoDoInput = memeTextoInput.value;
  memeTexto.innerHTML = textoDoInput;
}

function readImage() {
  if (this.files && this.files[0]) {
    var file = new FileReader();
    file.onload = function(e) {
      document.getElementById("meme-image").src = e.target.result;
    };       
    file.readAsDataURL(this.files[0]);
  }
}

memeTextoInput.addEventListener('change', escreverTextoNoMeme);
memeImagemInput.addEventListener('change', readImage);



// var fileTag = document.getElementById("filetag"),
// preview = document.getElementById("preview");

// fileTag.addEventListener("change", function() {
// changeImage(this);
// });

// function changeImage(input) {
  // var reader;

  // if (input.files && input.files[0]) {
    // reader = new FileReader();

    // reader.onload = function(e) {
    // preview.setAttribute('src', e.target.result);
    // }

    // reader.readAsDataURL(input.files[0]);
//   }
// }
// <input type="file" id="filetag">
// <img src="" id="preview"> 