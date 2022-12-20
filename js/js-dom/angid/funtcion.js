document.getElementById("helloText").innerHTML = "Hello World";

document.getElementsByClassName("hiText")[0].innerHTML = "Hi World";



const dummyElement = document.getElementsByClassName("dummy");
console.log(dummyElement);

for (i = 0; i < dummyElement.length; i++) {
    dummyElement[i].innerHTML = `Hello dummy div ${i + 1}`
}


document.getElementById("demo").innerHTML = "Date : " + Date();



//`````~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`````````\
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
    const green = getRandomNumber(0, 255);
    const red = getRandomNumber(0, 255);
    const yellow = getRandomNumber(0, 255);
    return `rgb(${red},${green},${yellow})`;
}

const htmlTag = document.querySelector('html');



let myButton = document.getElementById('myBtn');


function changeBackgroundColor() {
    // myButton.style.backgroundColor = getRandomColor();
    htmlTag.style.backgroundColor = getRandomColor();

}
myButton.addEventListener("click",changeBackgroundColor);