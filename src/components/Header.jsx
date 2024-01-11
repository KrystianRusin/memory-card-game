import React from "react";
import PokemonLogo from "../assets/pokemon-23.svg";
import "../styles/Header.css";

const Header = ({ score }) => {
  return (
    <div className="header__container">
      <div className="img__container">
        <img src={PokemonLogo} alt="Pokemon Logo" className="pokemon__logo" />
      </div>
      <div className="score__container">
        <p>Score: {score}</p>
        <p>High Score: 0</p>
      </div>
    </div>
  );
};

export default Header;
