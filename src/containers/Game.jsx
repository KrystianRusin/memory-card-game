import React, { useEffect, useState } from "react";
import "../styles/Game.css";

const Game = () => {
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [pokemonCards, setPokemonCards] = useState([]);

  useEffect(() => {
    generatePokemon();
  }, []);

  const generatePokemon = () => {
    const promises = [];
    for (let i = 0; i < 10; i++) {
      const randomId = Math.floor(Math.random() * 800) + 1; // Pokemon API currently has data till ID 898
      promises.push(
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(
          (response) => response.json()
        )
      );
    }
    Promise.all(promises).then((pokemonData) => {
      setPokemonCards(pokemonData.map((pokemon) => pokemon.name));
    });
  };

  return <div>Game</div>;
};

export default Game;
