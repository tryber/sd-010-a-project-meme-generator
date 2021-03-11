const textBox = document.getElementById('text-input');
textBox.addEventListener('keydown', () => {
  const getParagraph = document.getElementById('meme-text');
  getParagraph.innerText = textBox.value;
});
