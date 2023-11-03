import React, { useState } from "react";
import Square from "./Square";
import sound from "../assets/sound.mp3";
import invalidSound from "../assets/invalid_sound.mp3";
import win from "../assets/win.mp3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Board = () => {
  const [squares, SetSquares] = useState(Array(9).fill(null));
  const [turn, SetTurn] = useState(true);
  const Notify = () => {
    toast.error("INVALID CLICK", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-message",
    });
  };
  const handleClick = (i) => {
    if (squares[i] != null) {
      new Audio(invalidSound).play();
      Notify();
      return;
    }

    const copySquares = [...squares];
    copySquares[i] = turn ? "X" : "O";
    // setCurrentPlayer(copySquares[i])
    SetSquares(copySquares);
    new Audio(sound).play();

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
      } else if (!squares.includes(null)) return "Draw";
    }
    return false;
  };
  var winner = checkForWinner();
  const fun = () => {
    if (winner && winner !== "Draw") {
      // setStatus(true);
      new Audio(win).play();
      return "👏 Player  " + winner + " Won ✌️";
    } else {
      // setStatus(true);
      return `THE GAME IS  ${winner} 😭"`;
    }
  };

  const status = fun();
  const reset = () => {
    SetSquares(Array(9).fill(null));
    SetTurn(true);
  };

  return (
    <>
      <ToastContainer />
      {!winner ? (
        <>
          <h1>PLAYER {turn ? "X" : "O"}'S TURN</h1>
          <br></br>
          {/* style={BoardSTyle} */}
          <div className="board">
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
        <h1>{status}</h1>
      )}
      <button className="btn-reset" id="reset-btn" onClick={reset}>
        {winner ? "PLAY AGAIN" : "RESET"}
      </button>
      // {/* </div> */}
    </>
  );
};

export default Board;
