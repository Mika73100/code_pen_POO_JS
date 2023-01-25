//Créer un bouton pour jouer le script
//Créer 3 blocks contenant 3 languages !=
// value enter  \n


const htmlBox = document.querySelector("#htmlBox");
const cssBox = document.querySelector("#cssBox");
const css = document.querySelector("#css");
const js = document.getElementById("#jsBox");
const result = document.querySelector("#resultBox");
const progressBar = document.querySelector(".progress-bar");



htmlBox.addEventListener("keydown", addCode);
cssBox.addEventListener("keydown", addStyle);

function togg1(){
    togg1.addEventListener.style.hidden;
    togg2.addEventListener.style.
}


function addCode() {
    result.innerHTML = htmlBox.value;
    let nbCaractere = htmlBox.value.length;
    count .innerText = nbCaractere+'/100%'

    if (nbCaractere <= 35) {
        progressBar.style.backgroundColor="green";
        progressBar.style.width=nbCaractere+'%';

    } else if (nbCaractere <= 75) {
            progressBar.style.backgroundColor="orange";
            progressBar.style.width=nbCaractere+'%';

        } else {
                progressBar.style.backgroundColor="red";
                progressBar.style.width=nbCaractere+'%';
            }
}





function addStyle() {
    css.innerText = cssBox.value;
}

function addJs() {
    innerHTML = js.value;
}

function run() {
    // eval()
    new Function(js.value)();
    
}


 const button = document.querySelector('button');

 button.addEventListener('click', event => {
   button.innerHTML = `Nombre de clics : ${event.detail}`;
 });
