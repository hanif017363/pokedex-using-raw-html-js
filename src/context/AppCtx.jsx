/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useEffect, useState } from "react";

export const AppCtx = createContext();

export default function AppProvider({ children }) {
  const MAX_POKEMON = 649;
  const [inputText, setInputText] = useState("");
  const [pokemons, setPokemons] = useState(null);
  const [filter, setFilter] = useState("all");
  const [filteredPokemons, setFilteredPokemons] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const getPokemon = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`
    );
    const data = await res.json();
    console.log(data);

    const pokemonList = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();

        const datas = {
          id: data.id,
          name: data.name,
          types: data.types.map((type) => type.type.name),
        };
        return datas;
      })
    );

    setPokemons(pokemonList);
    setFilteredPokemons(pokemonList);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
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
  const value = {
    inputText,
    setInputText,

    filter,
    setFilter,
    typeColors,
    pokemons: filteredPokemons,
    favorites,

    toggleFavorite,
  };

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}
