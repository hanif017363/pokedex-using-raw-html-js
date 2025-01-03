import { useContext } from "react";
import { AppCtx } from "../context/AppCtx";

export default function Favourite() {
  const { pokemons, favorites, toggleFavorite } = useContext(AppCtx);
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
                  <div className="list-header">
                    <p>#{pokemon.id}</p>
                    <i
                      className={`fa-heart ${
                        favorites.includes(pokemon.id)
                          ? "fa-solid favorited"
                          : "fa-regular"
                      }`}
                      onClick={() => toggleFavorite(pokemon.id)}
                    ></i>
                  </div>
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
