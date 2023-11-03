import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Container from "./components/Container";
import Board from "./components/Board";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chart from "./components/Chat";
// export const UserContext= React.createContext();
// export const NickName=React.createContext();
function App() {
  const [username, Setusername] = useState("Akhi");
  return (
    <div className="App">
      {/* <Board/> */}
      {/* <Chart /> */}
      <Container />
    </div>
  );
}

export default App;
