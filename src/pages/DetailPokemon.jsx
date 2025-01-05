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

  // const backType = {
  //   normal: "linear-gradient(to bottom, #A8A878, #D3D3A3)",
  //   grass:
  //     "radial-gradient(circle at 10% 15%, #228b22 8%, transparent 25%), radial-gradient(circle at 50% 25%, #006400 12%, transparent 30%), radial-gradient(circle at 70% 80%, #228b22 10%, transparent 35%), radial-gradient(circle at 30% 70%, #006400 15%, transparent 40%), radial-gradient(circle at 90% 60%, #228b22 10%, transparent 25%), radial-gradient(circle at 40% 40%, #006400 8%, transparent 20%), linear-gradient(to bottom, #90ee90, #32cd32)",
  //   fire: "radial-gradient(circle at center, #F08030, #FF4500 70%)",
  //   electric: "radial-gradient(circle at 50% 50%, #F8D030, #FFD700 80%)",
  //   ice: "linear-gradient(135deg, #98D8D8, #E0FFFF)",
  //   water:
  //     "radial-gradient(circle at top, #6890F0, #1E90FF), linear-gradient(to bottom, #87CEEB, #4682B4)",
  //   fighting: "linear-gradient(to right, #C03028, #A52A2A)",
  //   poison: "radial-gradient(circle at center, #A040A0, #6B4686)",
  //   ground: "linear-gradient(to top, #E0C068, #D2B48C)",
  //   flying: "linear-gradient(to bottom, #A890F0, #B0E0E6)",
  //   psychic: "radial-gradient(circle at center, #F85888, #FFB6C1)",
  //   bug: "linear-gradient(to bottom, #A8B820, #9ACD32)",
  //   rock: "linear-gradient(120deg, #B8A038, #8B4513)",
  //   ghost: "radial-gradient(circle, #705898, #483D8B 90%)",
  //   dragon: "radial-gradient(circle at top, #7038F8, #8A2BE2)",
  //   dark: "linear-gradient(to bottom, #705848, #2F4F4F)",
  //   steel: "linear-gradient(to right, #B8B8D0, #A9A9A9)",
  //   fairy: "radial-gradient(circle at center, #EE99AC, #FF69B4 60%)",
  // };
  const backType = {
    normal: "linear-gradient(to bottom, #A8A878, #D3D3A3)",

    grass: `
      radial-gradient(circle at 10% 15%, #228b22 8%, transparent 25%),
      radial-gradient(circle at 50% 25%, #006400 12%, transparent 30%),
      radial-gradient(circle at 70% 80%, #228b22 10%, transparent 35%),
      linear-gradient(to bottom, #90ee90, #32cd32)
    `,

    fire: `
      radial-gradient(circle at 10% 20%, rgba(255, 69, 0, 0.7) 20%, transparent 60%),
      radial-gradient(circle at 70% 70%, rgba(255, 140, 0, 0.8) 30%, transparent 70%),
      linear-gradient(to bottom, #F08030, #FF4500)
    `,

    water: `
      radial-gradient(circle at 30% 30%, rgba(0, 119, 190, 0.4) 15%, transparent 40%),
      radial-gradient(circle at 70% 70%, rgba(30, 144, 255, 0.6) 20%, transparent 50%),
      linear-gradient(to bottom, #87CEEB, #4682B4)
    `,

    electric: `
      linear-gradient(45deg, #F8D030 25%, transparent 25%, transparent 50%, #F8D030 50%, #F8D030 75%, transparent 75%, transparent),
      linear-gradient(135deg, #FFD700 25%, transparent 25%, transparent 50%, #FFD700 50%, #FFD700 75%, transparent 75%, transparent)
    `,

    ice: `
      radial-gradient(circle at 30% 30%, rgba(135, 206, 250, 0.3) 10%, transparent 30%),
      radial-gradient(circle at 60% 60%, rgba(173, 216, 230, 0.4) 15%, transparent 45%),
      linear-gradient(to right, #98D8D8, #E0FFFF)
    `,

    fighting: `
      linear-gradient(45deg, #C03028 40%, #A52A2A 40%, transparent 50%),
      linear-gradient(-45deg, #C03028 40%, #A52A2A 40%, transparent 50%)
    `,

    poison: `
      radial-gradient(circle at center, rgba(160, 64, 160, 0.6) 15%, transparent 30%),
      radial-gradient(circle at 70% 50%, rgba(107, 70, 134, 0.6) 20%, transparent 50%),
      linear-gradient(to bottom, #A040A0, #6B4686)
    `,

    ground: `
      linear-gradient(to top, #E0C068, #D2B48C),
      radial-gradient(circle at 30% 70%, rgba(160, 82, 45, 0.4) 10%, transparent 30%),
      radial-gradient(circle at 80% 40%, rgba(139, 69, 19, 0.5) 15%, transparent 45%)
    `,

    psychic: `
      radial-gradient(circle at 50% 30%, rgba(248, 88, 136, 0.5) 25%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(255, 182, 193, 0.4) 15%, transparent 45%),
      linear-gradient(to bottom, #F85888, #FFB6C1)
    `,

    bug: `
      radial-gradient(circle at 10% 20%, #A8B820 10%, transparent 25%),
      radial-gradient(circle at 60% 70%, #9ACD32 15%, transparent 35%),
      linear-gradient(to bottom, #A8B820, #9ACD32)
    `,

    rock: `
      linear-gradient(to bottom, #B8A038, #8B4513),
      radial-gradient(circle at 40% 40%, rgba(139, 69, 19, 0.6) 15%, transparent 30%),
      radial-gradient(circle at 80% 80%, rgba(128, 128, 128, 0.5) 20%, transparent 50%)
    `,

    ghost: `
      radial-gradient(circle, rgba(112, 88, 152, 0.7) 20%, transparent 40%),
      radial-gradient(circle at 60% 40%, rgba(72, 61, 139, 0.6) 30%, transparent 60%),
      linear-gradient(to bottom, #705898, #483D8B)
    `,

    dragon: `
      radial-gradient(circle at 50% 20%, rgba(112, 56, 248, 0.6) 15%, transparent 40%),
      radial-gradient(circle at 70% 70%, rgba(138, 43, 226, 0.5) 25%, transparent 50%),
      linear-gradient(to bottom, #7038F8, #8A2BE2)
    `,

    dark: `
      radial-gradient(circle at 40% 40%, rgba(64, 64, 64, 0.7) 10%, transparent 30%),
      linear-gradient(to bottom, #705848, #2F4F4F)
    `,

    steel: `
      linear-gradient(to right, #B8B8D0, #A9A9A9),
      radial-gradient(circle at 50% 50%, rgba(192, 192, 192, 0.4) 20%, transparent 60%)
    `,

    fairy: `
      radial-gradient(circle at 50% 30%, rgba(255, 182, 193, 0.5) 20%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(238, 153, 172, 0.6) 15%, transparent 45%),
      linear-gradient(to bottom, #EE99AC, #FF69B4)
    `,
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

            <div className="detail-img-wrapper row">
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
