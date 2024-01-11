import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import Game from "./containers/Game";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const updateScore = () => {
    setScore((prevScore) => prevScore + 1);
    console.log(score);
  };

  const resetScore = () => {
    setScore(0);
  };

  const updateHighScore = () => {
    if (score > highScore) {
      setHighScore(score);
    }
  };

  return (
    <div className="content">
      <div className="header__container">
        <Header score={score} highScore={highScore} />
      </div>
      <div className="game__container">
        <Game
          updateScore={updateScore}
          resetScore={resetScore}
          updateHighScore={updateHighScore}
        />
      </div>
    </div>
  );
}

export default App;
