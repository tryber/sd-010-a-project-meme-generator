const selectInputText = document.querySelector('#text-input');
const selectDiv = document.querySelector('#meme-image-container');
const selectText = document.querySelector('#meme-text');
const selectInputFile = document.querySelector('#meme-insert');
const selectMemeImage = document.querySelector('#meme-image');

// const loadImage = (file) => {
//   const reader = new FileReader();

//   reader.onloadend = (e) => {
//     const image = selectMemeImage;
//     image.src = e.target.result;
//   };

//   reader.readAsDataURL(file);
// };

// function loadImage(event) {
//   selectMemeImage.src = URL.createObjectURL(event.target.files[0]);
//   selectMemeImage.onload = function() {
//     selectMemeImage.onload = function() {
//       URL.revokeObjectURL(selectMemeImage.src);// free memory
//     };
//   };
//   selectMemeImage.src = selectInputFile.value;
// }

// {/* <input type="file" accept="image/*" onchange="loadFile(event)">
// <img id="output"/>
// <script>
//   var loadFile = function(event) {
//     var output = document.getElementById('output');
//     output.src = URL.createObjectURL(event.target.files[0]);
//     output.onload = function() {
//       URL.revokeObjectURL(output.src) // free memory
//     }
//   };
// </script> */}

function loadImage() {
  selectInputFile.addEventListener('change', (event) => {
    selectMemeImage.style.width = '100%';
    selectMemeImage.style.height = '100%';
    selectMemeImage.src = URL.createObjectURL(event.target.files[0]);
    selectMemeImage.onload = () => {
      URL.revokeObjectURL(selectMemeImage.src);
    };
  });
}
loadImage();
