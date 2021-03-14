const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const maxChars = document.getElementById('max-chars');
const memeInsert = document.getElementById('meme-insert');

maxChars.innerHTML = 'Max. Chars: 0/60';

inputText.addEventListener('keyup', () => {
  memeText.innerHTML = inputText.value;
  const count = inputText.value.replace(/\s/g, '');
  maxChars.innerHTML = `Max. Chars: ${count.length}/60`;
});

memeInsert.onchange = (event) => {
  const imageOut = document.getElementById('meme-image');
  imageOut.src = URL.createObjectURL(event.target.files[0]);
  imageOut.onload = () => {
    URL.revokeObjectURL(imageOut.src);
  };
};
