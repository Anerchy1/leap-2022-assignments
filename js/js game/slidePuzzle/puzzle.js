const puzzleWin = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0]
]
const puzzle = [
    [0, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
]

let zeroX = 0,
  zeroY = 0;

const tableTarget = document.querySelector('#tableTarget');
const tbody = document.createElement('tbody');

let chosenTD;

function drawTiles() {
    for (let row = 0; row < puzzle.length; row++) {
        const cols = puzzle[row];
        const tr = document.createElement('tr');
        for (let col = 0; col < cols.length; col++) {
            const td = document.createElement('td');
            td.setAttribute('x', row);
            td.setAttribute('y', col);
            td.innerHTML = cols[col];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    tableTarget.appendChild(tbody);
}
drawTiles();

const swapTiles = (clickedX, clickedY) => {
  const temp = Number(puzzle[clickedX][clickedY]);
  puzzle[clickedX][clickedY] = 0;
  puzzle[zeroX][zeroY] = temp;
  zeroX = clickedX;
  zeroY = clickedY;
};

document.addEventListener('click', function (e) {
    chosenTD = e.target;
    const clickedX = Number(chosenTD.getAttribute('x'));
    const clickedY = Number(chosenTD.getAttribute('y'));
    const ydiff = Math.abs(clickedY - zeroY);
    const xdiff = Math.abs(clickedX - zeroX);
    let temp;
    tbody.innerHTML = '';
    if (puzzle[Math.abs(x - 1)][y] === 0) {
        temp = puzzle[x][y];
        puzzle[x][y] = puzzle[Math.abs(x - 1)][y];
        puzzle[Math.abs(x - 1)][y] = temp;
        drawTiles();
    }
    if(x<2){
       if (puzzle[x + 1][y] === 0) {
        temp = puzzle[x][y];
        puzzle[x][y] = puzzle[x + 1][y];
        puzzle[x + 1][y] = temp;
        drawTiles();
    } 
    }else{
        tbody.innerHTML = '';
        drawTiles();
    }
    
    if (puzzle[x][Math.abs(y - 1)] === 0) {
        temp = puzzle[x][y];
        puzzle[x][y] = puzzle[x][Math.abs(y - 1)];
        puzzle[x][Math.abs(y - 1)] = temp;
        drawTiles();
    }
    if(y<2){
        if (puzzle[x][y + 1] === 0) {
        temp = puzzle[x][y];
        puzzle[x][y] = puzzle[x][y + 1];
        puzzle[x][y + 1] = temp;
        drawTiles();
        } 
    }else{
        tbody.innerHTML = '';
        drawTiles();
    }
});

