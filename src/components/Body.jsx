import { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import Search from "./Search";

export default function Body() {
  const MAX_POKEMON = 649;
  const [inputText, setInputText] = useState("");
  const [pokemons, setPokemons] = useState(null);
  const [filter, setFilter] = useState("all");
  const [filteredPokemons, setFilteredPokemons] = useState(null);
  const getPokemon = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`
    );
    const data = await res.json();

    const pokemonList = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        const types = data.types.map((type) => type.type.name);

        return { ...pokemon, id: data.id, types };
      })
    );
    console.log(pokemonList);
    setPokemons(pokemonList);
    setFilteredPokemons(pokemonList);
  };

  useEffect(() => {
    getPokemon();
  }, []);
  useEffect(() => {
    if (pokemons) {
      let filtered = [...pokemons];

      switch (filter) {
        case "all":
          break;
        case "fire":
        case "water":
        case "grass":
        case "electric":
        case "normal":
        case "ice":
        case "fighting":
        case "poison":
        case "ground":
        case "flying":
        case "psychic":
        case "bug":
        case "rock":
        case "ghost":
        case "dragon":
        case "dark":
        case "steel":
        case "fairy":
          filtered = pokemons.filter((pokemon) =>
            pokemon.types.includes(filter)
          );

          filtered.sort((a, b) => {
            const aPrimary = a.types[0] === filter ? 0 : 1;
            const bPrimary = b.types[0] === filter ? 0 : 1;
            return aPrimary - bPrimary;
          });

          break;
        default:
          break;
      }
      if (inputText) {
        filtered = filtered.filter(
          (pokemon) =>
            pokemon.name.toLowerCase().includes(inputText.toLowerCase()) ||
            pokemon.id.toString().includes(inputText)
        );
      }
      setFilteredPokemons(filtered);
    }
  }, [filter, inputText, pokemons]);

  const typeColors = {
    fire: "red",
    water: "blue",
    grass: "green",
    electric: "yellow",
    normal: "gray",
    ice: "cyan",
    fighting: "brown",
    poison: "purple",
    ground: "saddlebrown",
    flying: "skyblue",
    psychic: "pink",
    bug: "olive",
    rock: "darkgray",
    ghost: "indigo",
    dragon: "gold",
    dark: "black",
    steel: "silver",
    fairy: "hotpink",
  };

  return (
    <div>
      <Search inputText={inputText} setInputText={setInputText} />
      <PokemonList
        setFilter={setFilter}
        typeColors={typeColors}
        pokemons={filteredPokemons}
      />
    </div>
  );
}
