function putText() {
  const textBox = document.getElementById('text-input');
  textBox.addEventListener('keyup', () => {
    const getParagraph = document.getElementById('meme-text');
    getParagraph.innerText = textBox.value;
  });
}

function putImage() {
  const getBtn = document.getElementById('meme-insert');
  getBtn.addEventListener('click', () => {
    const image = document.getElementById('meme-insert').files[0].name;
    document.getElementById('meme-image').src = image;
  });
}

function frameListeners() {
  const getBorder = document.getElementById('meme-image-container')
  document.getElementById('fire').addEventListener('click', function() {
    getBorder.style.border = '3px dashed red'
  })
  document.getElementById('water').addEventListener('click', function() {
    getBorder.style.border = '5px double blue'
  })
  document.getElementById('earth').addEventListener('click', function() {
    getBorder.style.border = '6px groove green'
  })
}



window.onload = function() {
  putText();
  frameListeners()
  putImage() 
}
