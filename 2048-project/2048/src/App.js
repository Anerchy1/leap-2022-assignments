import { useState } from "react";
import "./App.css";

function App() {
  const [puzzle, setPuzzle] = useState([
    [4, null, 4, 2],
    [null, 2, null, null],
    [null, null, null, 4],
    [null, 2, null, null],
  ]);

  const PuzzleRow = ({ row }) => {
    return row.map((col, index) => (
      <div key={`col-${index}`} className={`tile tile-${col}`}>
        {col}
      </div>
    ));
  };

  const rotatePuzzle = (puzzle) => {
    const newPuzzle = [];
    for (let i = 0; i < 4; i++) {
      newPuzzle.push([]);
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        newPuzzle[j].push(puzzle[i][j]);
      }
    }

    return newPuzzle;
  };

  const moveLeft = (puzzle, type) => {
    const newPuzzle = [];
    for (const row of puzzle) {
      const filteredCols = row.filter((col) => col !== null);
      const newRow = [];
      for (let i = 0; i < filteredCols.length; i++) {
        if (filteredCols[i] === filteredCols[i + 1]) {
          newRow.push(filteredCols[i] + filteredCols[i + 1]);
          i++;
        } else {
          newRow.push(filteredCols[i]);
        }
      }
      for (let i = 0; i < 4; i++) {
        if (!newRow[i]) newRow.push(null);
      }
      newPuzzle.push(newRow);
    }
    if (!type) nullPuzzle(newPuzzle);

    return newPuzzle;
  };

  const moveRight = (puzzle, type) => {
    const newPuzzle = [];
    for (const row of puzzle) {
      const filteredCols = row.filter((col) => col !== null);
      const newRow = [];
      for (let i = filteredCols.length - 1; i >= 0; i--) {
        if (filteredCols[i] === filteredCols[i - 1]) {
          newRow.push(filteredCols[i] + filteredCols[i - 1]);
          i--;
        } else {
          if (filteredCols[i]) newRow.push(filteredCols[i]);
        }
      }
      for (let i = 0; i < 4; i++) {
        if (!newRow[i]) newRow.push(null);
      }
      newPuzzle.push(newRow.reverse());
    }

    if (!type) nullPuzzle(newPuzzle);
    return newPuzzle;
  };

  const moveUp = (puzzle) => {
    let result = rotatePuzzle(puzzle);
    result = moveLeft(result, "aa");
    result = rotatePuzzle(result);

    nullPuzzle(result);
    return result;
  };
  const moveDown = (puzzle) => {
    let result = rotatePuzzle(puzzle);
    result = moveRight(result, "aa");
    result = rotatePuzzle(result);
    nullPuzzle(result);

    return result;
  };

  const handleKey = (e) => {
    switch (e.key) {
      case "ArrowDown":
        setPuzzle(moveDown(puzzle));
        break;
      case "ArrowUp":
        setPuzzle(moveUp(puzzle));
        break;
      case "ArrowRight":
        setPuzzle(moveRight(puzzle));
        break;
      case "ArrowLeft":
        setPuzzle(moveLeft(puzzle));
        break;
      default:
        break;
    }
  };

  function randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  const nullPuzzle = (puzzle) => {
    let filteredPuzzle = [];
    puzzle.map((row, i) => {
      row.filter((tile, j) => {
        return tile === null && filteredPuzzle.push([i, j]);
      });
    });
    const random = randomNumber(filteredPuzzle.length - 1);

    const randomTile = filteredPuzzle[random];
    const chance = randomNumber(3);
    let num = chance === 1 ? 2 : 4;

    puzzle[randomTile[0]][randomTile[1]] = num;
  };

  return (
    <div className="wrapper" onKeyDown={handleKey} tabIndex={0}>
      <h1>2048</h1>
      <div className="board">
        {puzzle.map((row, index) => (
          <PuzzleRow row={row} key={`row-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
