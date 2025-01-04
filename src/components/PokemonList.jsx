//* eslint-disable react/prop-types */
//* eslint-disable react-hooks/exhaustive-deps */

import { useContext } from "react";
import { AppCtx } from "../context/AppCtx";
import { Link } from "react-router-dom";

export default function PokemonList() {
  const { pokemons, setFilter, typeColors, favorites, toggleFavorite } =
    useContext(AppCtx);
  return (
    <div>
      <div className="body-wrapper">
        <div className="filter-wrapper">
          <select
            className="filter-wrap"
            name=""
            id="filter"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option className="option-font option" value="all">
              All
            </option>
            <option className="option-font option" value="fire">
              fire
            </option>
            <option className="option-font option" value="water">
              water
            </option>
            <option className="option-font option" value="grass">
              grass
            </option>
            <option className="option-font option" value="electric">
              electric
            </option>
            <option className="option-font option" value="normal">
              normal
            </option>
            <option className="option-font option" value="ice">
              ice
            </option>
            <option className="option-font option" value="fighting">
              fighting
            </option>
            <option className="option-font option" value="poison">
              poison
            </option>
            <option className="option-font option" value="ground">
              ground
            </option>
            <option className="option-font option" value="flying">
              flying
            </option>
            <option className="option-font option" value="psychic">
              psychic
            </option>
            <option className="option-font option" value="bug">
              bug
            </option>
            <option className="option-font option" value="rock">
              rock
            </option>
            <option className="option-font option" value="ghost">
              ghost
            </option>
            <option className="option-font option" value="dragon">
              dragon
            </option>
            <option className="option-font option" value="dark">
              dark
            </option>
            <option className="option-font option" value="steel">
              steel
            </option>
            <option className="option-font option" value="fairy">
              fairy
            </option>
          </select>
        </div>
        <div className="pokemon-list">
          {pokemons ? (
            pokemons.map((pokemon) => (
              <div className="pokemon" key={pokemon.id}>
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

                <p>Types : {pokemon.types.join(", ")}</p>

                <h1
                  className="pokemon-name"
                  style={{
                    color: typeColors[pokemon.types[0]] || "white",
                  }}
                >
                  {pokemon.name}
                </h1>
                <Link to={`/pokemon/${pokemon.id}`}>
                  <button className="detail-btn">View Details</button>
                </Link>
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
