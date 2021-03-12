function putText() {
  const textBox = document.getElementById('text-input');

  textBox.addEventListener('keyup', () => {
    const getParagraph = document.getElementById('meme-text');
    getParagraph.innerText = textBox.value;
});
}

let getBtn = document.getElementById('meme-insert')
getBtn.addEventListener('click', () => {
  let image = document.getElementById('meme-insert').files[0].name
  document.getElementById('meme-image').src = image
})


// let getBtn = document.getElementById('meme-image')
// let image = document.getElementById('meme-insert').files[0].name
// getBtn.src = image

putText()

