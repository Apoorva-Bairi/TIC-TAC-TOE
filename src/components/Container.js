import React, { useState } from "react";
import Board from "./Board";

const Container = () => {
  const ContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    flexDirection: "column",
  };

  return (
    <div className="container" id="container" style={ContainerStyle}>
      <Board />
    </div>
  );
};
export default Container;
