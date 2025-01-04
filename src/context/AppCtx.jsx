/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useEffect, useState } from "react";

export const AppCtx = createContext();

export default function AppProvider({ children }) {
  const MAX_POKEMON = 4;
  const [inputText, setInputText] = useState("");
  const [pokemons, setPokemons] = useState(null);
  const [filter, setFilter] = useState("all");
  const [filteredPokemons, setFilteredPokemons] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const getPokemon = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`
    );
    const data = await res.json();

    const pokemonList = await Promise.all(
      data.results.map(async (pokemon) => {
        1;
        const res = await fetch(pokemon.url);
        const data = await res.json();

        const datas = {
          id: data.id,
          name: data.name,
          fimage: data.sprites.front_default,
          bimage: data.sprites.back_default,
          sfimage: data.sprites.front_shiny,
          sbimage: data.sprites.back_shiny,
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
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
  };
  const value = {
    inputText,
    setInputText,

    filter,
    setFilter,
    typeColors,
    pokemons: filteredPokemons,
    favorites,
    currentImage,
    setCurrentImage,
    toggleFavorite,
  };

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}
