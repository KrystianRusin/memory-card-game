import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import Game from "./containers/Game";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);

  const updateScore = () => {
    setScore((prevScore) => prevScore + 1);
    console.log(score);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className="content">
      <div className="header__container">
        <Header score={score} />
      </div>
      <div className="game__container">
        <Game updateScore={updateScore} resetScore={resetScore} />
      </div>
    </div>
  );
}

export default App;
