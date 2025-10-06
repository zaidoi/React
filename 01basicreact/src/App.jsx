import React, { useState } from "react";
import "./App.css";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  // Calculate winner
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  // Handle click on a square
  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);

    const gameWinner = calculateWinner(newSquares);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (!newSquares.includes(null)) {
      setWinner("Draw");
    }

    setIsXNext(!isXNext);
  };

  // Reset game
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div>
      <h2>
        {winner
          ? winner === "Draw"
            ? "It's a Draw!"
            : `Winner: ${winner}`
          : `Next Player: ${isXNext ? "X" : "O"}`}
      </h2>

      <div className="board">
        <button className="square" onClick={() => handleClick(0)}>{squares[0]}</button>
        <button className="square" onClick={() => handleClick(1)}>{squares[1]}</button>
        <button className="square" onClick={() => handleClick(2)}>{squares[2]}</button>
        <button className="square" onClick={() => handleClick(3)}>{squares[3]}</button>
        <button className="square" onClick={() => handleClick(4)}>{squares[4]}</button>
        <button className="square" onClick={() => handleClick(5)}>{squares[5]}</button>
        <button className="square" onClick={() => handleClick(6)}>{squares[6]}</button>
        <button className="square" onClick={() => handleClick(7)}>{squares[7]}</button>
        <button className="square" onClick={() => handleClick(8)}>{squares[8]}</button>
      </div>

      <button id="reset" onClick={resetGame}>Reset</button>
    </div>
  );
}

export default Board;
