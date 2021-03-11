function showText(Event) {
  const text = Event.target.value;

  const textContainer = document.querySelector('#meme-text');
  textContainer.innerHTML = text;
}

const textInput = document.getElementById('text-input');
textInput.addEventListener('change', showText);
