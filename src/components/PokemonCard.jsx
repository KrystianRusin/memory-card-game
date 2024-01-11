import React, { useEffect, useState } from "react";
import "../styles/PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  const [sprite, setSprite] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
      .then((response) => response.json())
      .then((data) => setSprite(data.sprites.front_default));
  }, [pokemon.id]);

  return (
    <div>
      <div className="pokemon__card">
        <p className="pokemon__name">{pokemon.name}</p>
        <img src={sprite} alt={pokemon.name} className="pokemon__image" />
      </div>
    </div>
  );
};

export default PokemonCard;
