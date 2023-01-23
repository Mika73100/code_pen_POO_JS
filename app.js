//Créer un bouton pour jouer le script
//Créer 3 blocks contenant 3 languages !=
// value enter  \n

const htmlBox = document.querySelector("#htmlBox");
const cssBox = document.querySelector("#cssBox");
const js = document.querySelector("#jsBox");
const result = document.querySelector("#resultBox");
const css = document.querySelector("#css");

htmlBox.addEventListener("keydown", addCode);
cssBox.addEventListener("keydown", addStyle);

function addCode() {
    result.innerHTML = htmlBox.value;
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



// const button = document.querySelector('button');

// button.addEventListener('click', event => {
//   button.innerHTML = `Nombre de clics : ${event.detail}`;
// });
