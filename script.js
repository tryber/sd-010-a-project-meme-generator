const textInput = () => {
  document.getElementById('text-input').addEventListener('input', (event) => {
    document.getElementById('meme-text').innerText = event.target.value;
  });
};

textInput();
