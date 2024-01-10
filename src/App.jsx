import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import Game from "./containers/Game";
import "./App.css";

function App() {
  return (
    <div className="content">
      <Header />
      <Game />
    </div>
  );
}

export default App;
