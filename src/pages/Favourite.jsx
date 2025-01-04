import { useContext } from "react";
import { AppCtx } from "../context/AppCtx";

export default function Favourite() {
  const {
    pokemons,
    favorites,
    toggleFavorite,
    typeColors,
    currentImage,
    setCurrentImage,
  } = useContext(AppCtx);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div>
      <div>
        <h1 className="favourite-title">Favourite Pokemons</h1>

        <div className="favourite-list">
          {favorites?.length > 0 && pokemons?.length > 0 ? (
            pokemons
              .filter((pokemon) => favorites.includes(pokemon.id))
              .map((pokemon) => (
                <div className="favourite-body" key={pokemon.id}>
                  <div className="favourite-body-inner">
                    <div
                      className="pokemon-upper-body"
                      style={{ backgroundColor: typeColors[pokemon.types[0]] }}
                    >
                      <div className="list-header">
                        <p className="id-color">#{pokemon.id}</p>
                        <i
                          className={`fa-heart ${
                            favorites?.includes(pokemon.id)
                              ? "fa-solid favorited"
                              : "fa-regular"
                          }`}
                          onClick={() => toggleFavorite(pokemon.id)}
                        ></i>
                      </div>

                      <div className="pokemon-img-wrapper">
                        {currentImage && (
                          <img
                            className="pokemon-img"
                            src={`http://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                            alt={pokemon.name}
                          />
                        )}
                      </div>
                    </div>

                    <div className="type-box">
                      <span
                        className="type-tag"
                        style={{
                          backgroundColor: typeColors[pokemon.types[0]],
                        }}
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
                      <div className="current-img">
                        {currentImage && <img src={currentImage} />}
                      </div>
                    </div>

                    <div className="img-wrapper">
                      <div className="img-wrap">
                        <img
                          src={pokemon.fimage}
                          alt=""
                          onClick={() => handleImageClick(pokemon.fimage)}
                        />
                        <img
                          src={pokemon.bimage}
                          alt=""
                          onClick={() => handleImageClick(pokemon.bimage)}
                        />
                        <img
                          src={pokemon.sfimage}
                          alt=""
                          onClick={() => handleImageClick(pokemon.sfimage)}
                        />
                        <img
                          src={pokemon.sbimage}
                          alt=""
                          onClick={() => handleImageClick(pokemon.sbimage)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="no-pokemon-box">
              <p className="no-pokemon">No Favourite Pokémon Found...</p>
              <p className="no-pokemon">(╥﹏╥)</p>
              <p className="no-pokemon-extra">
                It seems your favorites list is empty, Start adding some
                Pokémon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
