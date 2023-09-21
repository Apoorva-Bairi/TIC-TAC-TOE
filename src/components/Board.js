import React, { useState } from "react";
import Square from "./Square";
const Board = () => {
  const [squares, SetSquares] = useState(Array(9).fill(null));
  const [turn, SetTurn] = useState(true);
  const [flag, setFlag] = useState(true);
  const [status, setStatus] = useState("");
  const handleClick = (i) => {
    if (squares[i] != null) {
      return;
    }

    const copySquares = [...squares];
    copySquares[i] = turn ? "X" : "O";
    // setCurrentPlayer(copySquares[i])
    SetSquares(copySquares);
    SetTurn(!turn);
  };
  const checkForWinner = () => {
    const winningLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winningLogic) {
      const [a, b, c] = logic;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      } else if (!squares.includes(null)) return "draw";
    }
    return false;
  };

  var winner = checkForWinner();
  const fun = () => {
    if (winner && winner !== "draw") {
      return "Player  " + winner + " Won";
    } else return "THE GAME IS DRAW : (";
  };
  const stat = fun();
  const reset = () => {
    SetSquares(Array(9).fill(null));
    SetTurn(true);
  };

  const BoardSTyle = {
    display: "grid",
    gridTemplateRows: "180px 180px 180px",
    gridTemplateColumns: "180px 180px 180px",
    // border:"1px solid black"
    columnGap: "10px",
    rowGap: "10px",
  };
  const ContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "60px",
    border: "none",
    flexDirection: "column",
  };

  return (
    <div className="container" style={ContainerStyle}>
      {!winner ? (
        <>
          <h1>`PLAYER {turn ? "X" : "O"}'s TURN`</h1>
          <br></br>
          <div className="board" style={BoardSTyle}>
            <Square value={squares[0]} onClick={() => handleClick(0)} />
            <Square value={squares[1]} onClick={() => handleClick(1)} />
            <Square value={squares[2]} onClick={() => handleClick(2)} />
            <Square value={squares[3]} onClick={() => handleClick(3)} />
            <Square value={squares[4]} onClick={() => handleClick(4)} />
            <Square value={squares[5]} onClick={() => handleClick(5)} />
            <Square value={squares[6]} onClick={() => handleClick(6)} />
            <Square value={squares[7]} onClick={() => handleClick(7)} />
            <Square value={squares[8]} onClick={() => handleClick(8)} />
          </div>
        </>
      ) : (
        // !flag?<h1>{"draw"}</h1>:<h1>{winner}</h1>
        <h1>{stat}</h1>
      )}
      <button className="btn-reset" onClick={reset}>
        RESET
      </button>
    </div>
  );
};

export default Board;
