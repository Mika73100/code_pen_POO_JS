//Créer un bouton pour jouer le script
//Créer 3 blocks contenant 3 languages !=
// value enter 


const htmlBox = document.querySelector("#htmlBox");
const cssBox = document.querySelector("#cssBox");
const css = document.querySelector("#css");
const js = document.getElementById("#jsBox");
const result = document.querySelector("#resultBox");
const progressBar = document.querySelector(".progress-bar");
const gif = document.querySelector(".gif");


htmlBox.addEventListener("keydown", addCode);
cssBox.addEventListener("keydown", addStyle);
jsBox.addEventListener("keydown", addlogique);
htmlBox.addEventListener("mouseover", spinnerborder);



//ici je modifie le innerHTML avec en plus la barre de progression.
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


//ici je modifie le css du innertext.
    function addStyle() {
        css.innerText = cssBox.value;
    }

    function addlogique() {
        js.innerText = jsBox.value;
    }

    function run() {
        eval(jsBox.value);
    }

    let btnrun = document.getElementById("btn")
    btnrun.addEventListener('click',function(){
        console.log();
    })


    function spinnerborder(){
            gif.style.visibility=visible;
        }
    










////////////////////////Autre exo////////////////////////////////////

let btn = document.getElementById("btn")
let para = document.getElementById("parag1, parag2")
btn.addEventListener('click',function(){
    para.classList.toggle("active")
})

    function changer_style() {
    let p = document.getElementById("parag1")
    p.classList.toggle('active')
}

    function changerStyles(){
    let p = document.getElementById("parag2")
    p.classList.toggle('active')
}
