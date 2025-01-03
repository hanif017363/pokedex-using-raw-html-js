import { useContext } from "react";
import { AppCtx } from "../context/AppCtx";

export default function Favourite() {
  const { pokemons, favorites } = useContext(AppCtx);
  return (
    <div>
      <div>
        <h1>Favourite</h1>
        <div>
          {pokemons &&
            pokemons
              .filter((pokemon) => favorites.includes(pokemon.id))
              .map((pokemon) => (
                <div key={pokemon.id}>
                  <img
                    src={`http://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    alt={pokemon.name}
                  />
                  <h3>{pokemon.name}</h3>
                  <p>{pokemon.types.join(", ")}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
