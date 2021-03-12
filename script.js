/* add text on image */
const textImage = document.querySelector('#text-input');

function insertText() {
    const textInput = document.querySelector('#text-input');
    const textImage = document.querySelector('#meme-text');
    textImage.innerText = textInput.value;
}

textImage.addEventListener('keydown', insertText);

/* function uploadImg */
const insert = document.querySelector('#meme-insert');

function uploadImg() {
    const insert = document.querySelector('#meme-insert');
    const image = document.querySelector('#meme-image img');
    image.src = URL.createObjectURL(insert.files[0]);
}

insert.addEventListener('change', uploadImg);
