/* add text on image */
const textImage = document.querySelector('#text-input');

function insertText() {
    const textInput = document.querySelector('#text-input');
    textImage = document.querySelector('#meme-text');
    textImage.innerText = textInput.value;
}

textImage.addEventListener('keyup', insertText);

/* function uploadImg */
const insert = document.querySelector('#meme-insert');

function uploadImg() {
    insert = document.querySelector('#meme-insert');
    const image = document.querySelector('#meme-image img');
    image.src = URL.createObjectURL(insert.files[0]);
}

insert.addEventListener('change', uploadImg);
