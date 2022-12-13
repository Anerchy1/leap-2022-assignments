let SCORE = 0;
let TILE_COUNT = 4;

const TIMER = 10;
let MILLISECONDS = 0;
let SECONDS = TIMER;
let isGameOver = false;


const gameOverScreen = document.querySelectorAll(".game-over-screen")[0];

const gameOverTarget = document.querySelectorAll("#gameOverTarget")[0];

const scoreTarget = document.querySelector("#scoreTarget");

const startAgain = document.querySelector("#startAgain");

function gameOver() {
    //    alert('Time up! Your score is :' + SCORE);

    gameOverScreen.classList.add("active");
    isGameOver = true;
}

function updateScore(point) {
    SCORE += point;
    scoreTarget.innerHTML = SCORE;
    gameOverTarget.innerHTML = SCORE;
}


const parent = document.querySelector("ul");
const timerTarget = document.querySelector("#timerTarget");

function updateTimer() {
    if (MILLISECONDS <= 0) {
        SECONDS--;

        MILLISECONDS = 900;
    }
    MILLISECONDS -= 10;

    if (MILLISECONDS <= 0 && SECONDS <= 0) {
        clearInterval(countDown);
        gameOver()
    }

    let timerResult = '';
    if (SECONDS < 10) {
        timerResult += '0';
    }
    timerResult += SECONDS;
    timerResult += ":";
    if (MILLISECONDS < 100) {
        timerResult += "0";
    }
    if (MILLISECONDS < 10) {
        timerResult += "0";
    }
    timerResult += MILLISECONDS;
    timerTarget.innerHTML = timerResult;
}

const countDown = setInterval(updateTimer, 10);

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


function getDiffrentColor(colors) {
    const random = getRandomNumber(0, 2);
    const newColors = [...colors];
    let color = newColors[random];


    if (SCORE >= 0 && SCORE < 5) {
        if (color > 126) {
            color -= 80;
        } else {
            color += 80;
        }
    }
    if (SCORE >= 5 && SCORE < 10) {
        if (color > 126) {
            color -= 60;
        } else {
            color += 60;
        }
    }
    if (SCORE >= 10 && SCORE < 20) {
        if (color > 126) {
            color -= 40;
        } else {
            color += 40;
        }
    } else {
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


    const randomIndex = getRandomNumber(0, TILE_COUNT - 1);


    for (let i = 0; i < TILE_COUNT; i++) {
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
                SECONDS = TIMER - 1;
                reDraw();
            } else {
                SECONDS -= 2;
            }
        });
        parent.appendChild(li);
        // onoo 5 aas deesh garah ym bol nudnii toog 
        if (SCORE > 5) {
            TILE_COUNT = 9;
            li.style.width = '133.3px';
            li.style.height = '133.3px';
        }
        if (SCORE > 8) {
            TILE_COUNT = 16;
            li.style.width = '98.75px';
            li.style.height = '98.75px';
        }
        if (SCORE > 12) {
            TILE_COUNT = 25;
            li.style.width = '78px';
            li.style.height = '78px';
        }
        if (SCORE > 15) {
            TILE_COUNT = 64;
            li.style.width = '46.875px';
            li.style.height = '46.875px';
        }
        if (SCORE > 18) {
            TILE_COUNT = 100;
            li.style.width = '36.5px';
            li.style.height = '36.5px';
        }
    }
}
reDraw();
// function gameStart() {
//     reDraw()
//     TILE_COUNT = 4;
//     SECONDS = TIMER;
//     updateScore(0 - SCORE);
//     MILLISECONDS = 0;
//     // isGameOver =false;
//     gameOverScreen.classList.remove("active");
    
//     countDown = setInterval(updateTimer, 10);
//     updateTimer();
    
// }
// startAgain.addEventListener('click', gameStart);
