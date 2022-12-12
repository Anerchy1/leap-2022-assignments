let score = 0;
const scoreTarget = document.querySelector("#scoreTarget");

function updateScore(point) {
    score += point;
    scoreTarget.innerHTML = score;


}


const parent = document.querySelector("ul");

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomColor() {
    // RGB 
    const red = getRandomNumber(0, 255);
    const green = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);
    return [red, green, blue];
}
let tileCount = 4;


function getDiffrentColor(colors) {
    const random = getRandomNumber(0, 2);
    const newColors = [...colors];
    let color = newColors[random];


    if(score>=0 && score<5){
        if (color > 126) {
        color -= 80;
    } else {
        color += 80;
    }}
    if(score>=5 && score<10){
        if (color > 126) {
        color -= 60;
    } else {
        color += 60;
    }}
    if(score>=10 && score <20){
        if (color > 126) {
        color -= 40;
    } else {
        color += 40;
    }
    }else{
        if (color > 126) {
        color -= 20;
    } else {
        color += 20;
    }
    }
    newColors[random] = color;
    return `rgb(${newColors[0]},${newColors[1]},${newColors[2]})`
}


function reDraw() {
    parent.innerHTML = "";
    const colors = getRandomColor();


    const randomIndex = getRandomNumber(0, tileCount - 1);


    for (let i = 0; i < tileCount; i++) {
        const li = document.createElement("li");
        const isNormal = i !== randomIndex;
        if (isNormal) {
            li.style.backgroundColor = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
        } else {
            li.style.backgroundColor = getDiffrentColor(colors);
        }
        li.addEventListener('click', function () {
            if (!isNormal) {
                updateScore(1);
                reDraw();
            } else {
                updateScore(-2);
            }
        });
        parent.appendChild(li);
        // onoo 5 aas deesh garah ym bol nudnii toog 
        if (score > 5) {
            tileCount = 9;
            li.style.width = '133.3px';
            li.style.height = '133.3px';
        }
        if (score > 8) {
            tileCount = 16;
            li.style.width = '98.75px';
            li.style.height = '98.75px';
        }
        if (score > 12) {
            tileCount = 25;
            li.style.width = '78px';
            li.style.height = '78px';
        }
        if (score > 15) {
            tileCount = 64;
            li.style.width = '46.875px';
            li.style.height = '46.875px';
        }
        if (score > 18) {
            tileCount = 100;
            li.style.width = '36.5px';
            li.style.height = '36.5px';
        }
    }
}

reDraw();
