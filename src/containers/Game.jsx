import React, { useEffect, useState } from "react";
import "../styles/Game.css";
import PokemonCard from "../components/PokemonCard";

const Game = ({ setScore }) => {
  const [clicked, setClicked] = useState([]);
  const [pokemonCards, setPokemonCards] = useState([]);

  const handleClick = (id) => {
    console.log(id);
    console.log(clicked);
    if (clicked.includes(id)) {
      setClicked([]);
    } else {
      setClicked((prevClicked) => [...prevClicked, id]);
    }
  };

  useEffect(() => {
    generatePokemon();
  }, [clicked]);

  const generatePokemon = () => {
    setPokemonCards([]);
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
