import React from "react";

const Square = (props) => {
  const SquareStyle = {
    borderRadius: ".7rem",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "Pointer",
    outline: "none",
  };
  return (
    <button onClick={props.onClick} className="square" style={SquareStyle}>
      {props.value}
    </button>
  );
};

export default Square;
