import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import Game from "./containers/Game";
import "./App.css";

function App() {
  return (
    <div className="content">
      <div className="header__container">
        <Header />
      </div>
      <div className="game__container">
        <Game />
      </div>
    </div>
  );
}

export default App;
