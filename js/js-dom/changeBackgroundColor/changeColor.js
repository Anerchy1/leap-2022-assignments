function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
    const green = getRandomNumber(0, 255);
    const red = getRandomNumber(0, 255);
    const yellow = getRandomNumber(0, 255);
    return `rgb(${red},${green},${yellow})`;
}

document.querySelectorAll('.firstText')[0].innerHTML = "Click to set background color";

let myButton = document.getElementById('myBtn');
let firstText = document.querySelectorAll('.firstText')[0];
let secondText = document.querySelectorAll('.secondText')[0];
const htmlTag = document.querySelector('html');


function changeBackgroundColor() {
    secondText.style.backgroundColor = getRandomColor();
}

function changeBackgroundColorByBtn(){
        htmlTag.style.backgroundColor = getRandomColor();
}

function changeParaColor(){
    firstText.style.backgroundColor = getRandomColor();
    secondText.style.backgroundColor = getRandomColor();
}


firstText.addEventListener('click',changeBackgroundColorByBtn)

secondText.addEventListener("click",changeBackgroundColor);

myButton.addEventListener('click', changeParaColor);