import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import Container from './components/Container';
import Board from './components/Board';
// export const UserContext= React.createContext();
// export const NickName=React.createContext(); 
function App() {
      const [username,Setusername]=useState("Akhi");
  return (
    <div className="App">

    <Board/>
    
    
    </div>
  );
}

export default App;
