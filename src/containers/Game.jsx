import React, { useEffect, useState } from "react";
import "../styles/Game.css";
import PokemonCard from "../components/PokemonCard";

const Game = ({ updateScore, resetScore, updateHighScore }) => {
  const [clicked, setClicked] = useState([]);
  const [pokemonCards, setPokemonCards] = useState([]);

  const handleClick = (id) => {
    if (clicked.includes(id)) {
      alert("You lose!");
      addClicked(id);
      resetScore();
      setClicked([]);
    } else {
      updateHighScore();
      updateScore();
      generatePokemon();
      addClicked(id);
    }
  };

  const addClicked = (id) => {
    setClicked([...clicked, id]);
  };

  useEffect(() => {
    generatePokemon();
  }, [clicked]);

  const generatePokemon = () => {
    setPokemonCards([]);
    const promises = [];
    const generatedIds = new Set();
    while (generatedIds.size < 10) {
      const randomId = Math.floor(Math.random() * 100) + 1; // Pokemon API currently has data till ID 898
      if (!generatedIds.has(randomId)) {
        generatedIds.add(randomId);
        promises.push(
          fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(
            (response) => response.json()
          )
        );
      }
    }
    Promise.all(promises).then((pokemonData) => {
      setPokemonCards(
        pokemonData.map((pokemon) => ({ id: pokemon.id, name: pokemon.name }))
      );
    });
  };

  return (
    <div className="game__container">
      <div className="pokemon__grid">
        {pokemonCards.map((pokemon, index) => (
          <PokemonCard
            key={`${pokemon.id}-${index}`}
            pokemon={pokemon}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
