const source = document.getElementById('memeImg');
const frame = document.getElementsByClassName('box');
const submit = document.getElementById('submit')
submit.addEventListener('click',placingSource);
function placingSource (){
    if(frame[0].children[0] != undefined){
        for(let index=0; index<frame[0].children.length; index+=1){
            frame[0].removeChild(frame[0].children[index]);
        }
    }
    if(source.files[0]!=undefined){
    let sourceInscreen = document.createElement('img');
    sourceInscreen.setAttribute('src',URL.createObjectURL(source.files[0]));
    sourceInscreen.style.width="500px"
    sourceInscreen.style.height="500px"
    frame[0].appendChild(sourceInscreen);
    }
}
