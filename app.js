

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



// loader dans le html

htmlBox.addEventListener("mouseout", gifLoaderOut)
htmlBox.addEventListener("mouseover", gifLoaderOver);

function gifLoaderOut(){
    document.querySelector(".gif").style.visibility = "hidden";
}

function gifLoaderOver(){
    document.querySelector(".gif").style.visibility = "visible";

}


// loader dans le css

cssBox.addEventListener("mouseout", gifLoaderOut)
cssBox.addEventListener("mouseover", gifLoaderOver);

function gifLoaderOut(){
    document.querySelector(".gif").style.visibility = "hidden";
}

function gifLoaderOver(){
    document.querySelector(".gif").style.visibility = "visible";

}

// loader dans le js

jsBox.addEventListener("mouseout", gifLoaderOut)
jsBox.addEventListener("mouseover", gifLoaderOver);

function gifLoaderOut(){
    document.querySelector(".gif").style.visibility = "hidden";
}

function gifLoaderOver(){
    document.querySelector(".gif").style.visibility = "visible";

}



////////////////ici le dark et light mode /////////////////////
//les H2








///////////////Le background ////////////////////////////////////


const body = document.querySelector('body')
const initialTheme = 'light'

const setTheme = (theme) => {
    localStorage.setItem('theme', theme)
    body.setAttribute('data-theme', theme)
}

const toggleTheme = () => {
    let button=document.getElementById('clicblanc');

    const activeTheme = localStorage.getItem('theme');

    if (activeTheme === 'light'){
        console.log("LIGHT -> DARK");
        setTheme ('dark');
        button.style.background =  'white';
        
    } 

    else{
        console.log("DARK ->LIGHT");
        setTheme ('light');
        button.style.background = 'black';        
        
    } 
}   
const setThemeOnInit = () => {
    const savedTheme = localStorage.getItem('theme');
    savedTheme
    ? body.setAttribute('data-theme', savedTheme) 
    : setTheme(initialTheme);
}

setThemeOnInit()

