const memeTextoInput = document.querySelector('#text-input');
const memeTexto = document.querySelector('#meme-text');
const memeImagem = document.querySelector('#meme-image');
const memeImagemInput = document.querySelector('#meme-insert');
const mudarBordaButtons = document.querySelectorAll('.botao-mudar-borda');
const imagensSugeridas = document.querySelectorAll('#imagens-sugestao img');

function escreverTextoNoMeme() {
  const textoDoInput = memeTextoInput.value;
  memeTexto.innerHTML = textoDoInput;
}

function readImage() {
  const reader = new FileReader();

  if (this.files && this.files[0]) {
    reader.onload = (e) => {
      memeImagem.src = e.target.result;
    };
    reader.readAsDataURL(this.files[0]);
  }
}

function mudarBorda(buttonEl) {
  const botaoClicado = buttonEl.innerHTML;
  const memeImagemContainer = document.querySelector('#meme-image-container');
  if (botaoClicado === 'Fire') memeImagemContainer.style.border = '3px dashed red';
  if (botaoClicado === 'Water') memeImagemContainer.style.border = '5px double blue';
  if (botaoClicado === 'Earth') memeImagemContainer.style.border = '6px groove green';
}

function usarImagemSugerida(imgElHTML) {
  const imagemSelecionada = imgElHTML.src;
  memeImagem.src = imagemSelecionada;
}

memeTextoInput.addEventListener('change', escreverTextoNoMeme);
memeImagemInput.addEventListener('change', readImage);
mudarBordaButtons.forEach((el) => el.addEventListener('click', (e) => mudarBorda(e.target)));
imagensSugeridas.forEach((el) => el.addEventListener('click', (e) => usarImagemSugerida(e.target)));
