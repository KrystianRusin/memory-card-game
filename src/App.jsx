import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import Game from "./containers/Game";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);

  const updateScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="content">
      <div className="header__container">
        <Header />
      </div>
      <div className="game__container" setScore={updateScore}>
        <Game />
      </div>
    </div>
  );
}

export default App;
