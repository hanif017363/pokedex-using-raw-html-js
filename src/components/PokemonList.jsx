//* eslint-disable react/prop-types */
//* eslint-disable react-hooks/exhaustive-deps */

import { useContext } from "react";
import { AppCtx } from "../context/AppCtx";
import { Link } from "react-router-dom";
import Filter from "./Filter";

export default function PokemonList() {
  const { pokemons, setFilter, typeColors, favorites, toggleFavorite } =
    useContext(AppCtx);
  return (
    <div>
      <div className="body-wrapper">
        <Filter setFilter={setFilter} />
        <div className="pokemon-list">
          {pokemons ? (
            pokemons.map((pokemon) => (
              <div className="pokemon" key={pokemon.id}>
                <div className="pokemon-body">
                  <div
                    className="pokemon-upper-body"
                    style={{ backgroundColor: typeColors[pokemon.types[0]] }}
                  >
                    <div className="list-header">
                      <p className="id-color">#{pokemon.id}</p>
                      <i
                        className={`fa-heart ${
                          favorites.includes(pokemon.id)
                            ? "fa-solid favorited"
                            : "fa-regular"
                        }`}
                        onClick={() => toggleFavorite(pokemon.id)}
                      ></i>
                    </div>
                    <div className="pokemon-img-wrapper">
                      <img
                        className="pokemon-img"
                        src={`http://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        alt={pokemon.name}
                      />
                    </div>
                  </div>

                  <div className="type-box">
                    <span
                      className="type-tag"
                      style={{ backgroundColor: typeColors[pokemon.types[0]] }}
                    >
                      {pokemon.types[0]}
                    </span>
                    {pokemon.types[1] && (
                      <span
                        className="type-tag"
                        style={{
                          backgroundColor: typeColors[pokemon.types[1]],
                        }}
                      >
                        {pokemon.types[1]}
                      </span>
                    )}
                  </div>

                  <div className="pokemon-name-wrapper">
                    <h1
                      className="pokemon-name"
                      style={{
                        color: typeColors[pokemon.types[0]] || "white",
                      }}
                    >
                      {pokemon.name}
                    </h1>
                  </div>
                  <div
                    className="detail-btn-wrapper"
                    style={{
                      backgroundColor: typeColors[pokemon.types[0]],
                      border: `1px solid ${typeColors[pokemon.types[0]]}`,
                    }}
                  >
                    <Link
                      className="detail-btn-wrap "
                      to={`/pokemon/${pokemon.id}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-pokemon">No Pokemon Found</p>
          )}
        </div>
      </div>
    </div>
  );
}
