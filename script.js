// Declaração de variáveis globais
const textInsert = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');
const image = document.getElementById('meme-image');
const insertImage = document.getElementById('meme-insert');


// Declaração de funções
function inserTextMeme() {
  textMeme.innerText = textInsert.value;
}


// Delaração de escutadores de eventos
textInsert.addEventListener('input', inserTextMeme);

// Ações de inicialização 