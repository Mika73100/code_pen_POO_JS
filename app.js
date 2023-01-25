

//ici je modifie le innerHTML avec en plus la barre de progression.

const htmlBox = document.querySelector("#htmlBox");
const result = document.querySelector("#resultBox");
const progressBar = document.querySelector(".progress-bar");

htmlBox.addEventListener("keydown", addCode);

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

const css = document.querySelector("#css");
const cssBox = document.querySelector("#cssBox");

cssBox.addEventListener("keydown", addStyle);

    function addStyle() {
        css.innerText = cssBox.value;
    }


//je modifie le js 

const js = document.getElementById("jsBox");

let btn = document.getElementById("btn");

jsBox.addEventListener("keyup", addlogique);

    function addlogique() {
        let addjs = document.getElementById("jsBox").value;
        document.getElementById('js').innerText = addjs;
    }

    function run(){
       return jsBox && eval(js.value)();
    };

    //document.getElementById("lol").style.color="green";


//ici je met le gif en route

// function mafonction() {
//     //console.log ("mon code fonctionne");
//     var img = document.querySelector("#htmlBox");
//     img.style.visibility=visible;
// };



// loader 
htmlBox.addEventListener("mouseout", gifLoaderOut)
htmlBox.addEventListener("mouseover", gifLoaderOver);

function gifLoaderOut(){
    document.querySelector(".gif").style.visibility = "hidden";
}

function gifLoaderOver(){
    document.querySelector(".gif").style.visibility = "visible";
     
}

cssBox.addEventListener("mouseout", gifLoaderOut)
cssBox.addEventListener("mouseover", gifLoaderOver);

function gifLoaderOut(){
    document.querySelector(".gif").style.visibility = "hidden";
}

function gifLoaderOver(){
    document.querySelector(".gif").style.visibility = "visible";
     
}

jsBox.addEventListener("mouseout", gifLoaderOut)
jsBox.addEventListener("mouseover", gifLoaderOver);

function gifLoaderOut(){
    document.querySelector(".gif").style.visibility = "hidden";
}

function gifLoaderOver(){
    document.querySelector(".gif").style.visibility = "visible";
     
}