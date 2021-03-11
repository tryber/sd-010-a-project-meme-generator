
let textBox = document.getElementById('text-input')
  textBox.addEventListener('keydown', function() { 
  let getParagraph = document.getElementById('meme-text');
  getParagraph.innerText = textBox.value
  })
  