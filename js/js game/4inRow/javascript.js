const board = [];

const depth = 6;
const width = 7;

const gameTarget = document.querySelector('#gameTarget');
// let boardBody= [[]];
for(let i=0; i<width; i++){
    for(let j=0; j<depth; j++){
        let boardBody = document.createElement('div');
        boardBody.classList.add('circle');
        gameTarget.appendChild(boardBody);
    }
}

boardBody.addEventListener('click', function(){
    
});