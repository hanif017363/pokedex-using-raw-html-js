import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Detail.css";
export default function DetailPokemon() {
  const [poke, setPoke] = useState(null);
  const { postId } = useParams();
  const [currentImage, setCurrentImage] = useState("");

  const getMyPokemon = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${postId}`);
      const data = await res.json();
      const datas = {
        id: data.id,
        name: data.name,
        types: data.types.map((type) => type.type.name),
        fimage: data.sprites.front_default,
        bimage: data.sprites.back_default,
        sfimage: data.sprites.front_shiny,
        sbimage: data.sprites.back_shiny,
        height: data.height,
        weight: data.weight,
        abilities: data.abilities.map((ability) => ability.ability.name),
        stats: data.stats.map((stat) => ({
          name: stat.stat.name,
          base: stat.base_stat,
        })),
      };

      setPoke(datas);
      setCurrentImage(datas.fimage);
    } catch (error) {
      console.log("failed fetching error", error);
    }
  };

  useEffect(() => {
    getMyPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  const handleImage = (img) => {
    setCurrentImage(img);
  };

  const backType = {
    normal: "linear-gradient(to bottom, #A8A878, #D3D3A3)",
    grass:
      "radial-gradient(circle at 10% 15%, #228b22 8%, transparent 25%), radial-gradient(circle at 50% 25%, #006400 12%, transparent 30%), radial-gradient(circle at 70% 80%, #228b22 10%, transparent 35%), radial-gradient(circle at 30% 70%, #006400 15%, transparent 40%), radial-gradient(circle at 90% 60%, #228b22 10%, transparent 25%), radial-gradient(circle at 40% 40%, #006400 8%, transparent 20%), linear-gradient(to bottom, #90ee90, #32cd32)",
    fire: "radial-gradient(circle at center, #F08030, #FF4500 70%)",
    electric: "radial-gradient(circle at 50% 50%, #F8D030, #FFD700 80%)",
    ice: "linear-gradient(135deg, #98D8D8, #E0FFFF)",
    water:
      "radial-gradient(circle at top, #6890F0, #1E90FF), linear-gradient(to bottom, #87CEEB, #4682B4)",
    fighting: "linear-gradient(to right, #C03028, #A52A2A)",
    poison: "radial-gradient(circle at center, #A040A0, #6B4686)",
    ground: "linear-gradient(to top, #E0C068, #D2B48C)",
    flying: "linear-gradient(to bottom, #A890F0, #B0E0E6)",
    psychic: "radial-gradient(circle at center, #F85888, #FFB6C1)",
    bug: "linear-gradient(to bottom, #A8B820, #9ACD32)",
    rock: "linear-gradient(120deg, #B8A038, #8B4513)",
    ghost: "radial-gradient(circle, #705898, #483D8B 90%)",
    dragon: "radial-gradient(circle at top, #7038F8, #8A2BE2)",
    dark: "linear-gradient(to bottom, #705848, #2F4F4F)",
    steel: "linear-gradient(to right, #B8B8D0, #A9A9A9)",
    fairy: "radial-gradient(circle at center, #EE99AC, #FF69B4 60%)",
  };

  return (
    <div
      className="detail-body"
      style={{
        background: backType[poke?.types[0]],
      }}
    >
      {poke ? (
        <div className="detail-body-head">
          <div className="detail-upper-body  ">
            <div className="back-wrapper row-header detail-container">
              <Link to="/" className="back-wrap">
                <i className="fa-solid fa-arrow-left back-btn"></i>
              </Link>
              <p className="detail-id">#{poke.id}</p>
            </div>

            <div className="detail-img-wrapper">
              <img
                className="detail-img"
                src={`http://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
                alt={poke.name}
              />
            </div>
            <h1 className="detail-pokemon-name">{poke.name}</h1>
          </div>
          <div className="sm-cur-wrapper row">
            <div className="sm-img-cur-box row">
              <img className="sm-img-cur" src={currentImage} alt="img-name" />
            </div>
          </div>
          <div className="img-box">
            <img
              src={poke.fimage}
              alt={poke.name}
              onClick={() => handleImage(poke.fimage)}
            />
            <img
              src={poke.bimage}
              alt={poke.name}
              onClick={() => handleImage(poke.bimage)}
            />
            <img
              src={poke.sfimage}
              alt={poke.name}
              onClick={() => handleImage(poke.sfimage)}
            />
            <img
              src={poke.sbimage}
              alt={poke.name}
              onClick={() => handleImage(poke.sbimage)}
            />
          </div>
          <div className="detail-lower-body detail-container">
            <div className="detail-lower-body-wrap">
              <p>Height - {parseFloat(poke.height / 10)} m</p>
              <p>Weight - {poke.weight / 10} KG</p>
              <p>Types - {poke.types.join(", ").toUpperCase()}</p>
              <p>Abilities - {poke.abilities.join(", ")}</p>

              <div className="progress-wrapper">
                {poke.stats.map((stat) => (
                  <div className="progress-wrap" key={stat.name}>
                    <div className="progress-name">
                      <p>{stat.name.toUpperCase()} -</p>
                    </div>
                    <div className="progress-bar">
                      <progress
                        className="progress"
                        value={stat.base}
                        max="100"
                      ></progress>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading-box">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
