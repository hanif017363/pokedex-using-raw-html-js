import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function DetailPokemon() {
  const [poke, setPoke] = useState(null);
  const { postId } = useParams();
  const [currentImage, setCurrentImage] = useState("");
  console.log(postId, "id");
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
  }, [postId]);

  const handleImage = (img) => {
    setCurrentImage(img);
  };

  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <Link to="/">Back to List</Link>
      </div>
      {poke ? (
        <div>
          <h1>{poke.name}</h1>
          <img
            src={`http://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
            alt={poke.name}
          />
          <div className="img">
            <img src={currentImage} alt="img-name" />
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
          <p>ID: {poke.id}</p>
          <p>Height: {poke.height}</p>
          <p>Weight: {poke.weight}</p>
          <p>Types: {poke.types.join(", ")}</p>
          <p>Abilities: {poke.abilities.join(", ")}</p>
          <p>Stats:</p>
          <div className="progress-wrapper">
            {poke.stats.map((stat) => (
              <div className="progress-wrap" key={stat.name}>
                {stat.name}
                <progress value={stat.base} max="100"></progress>
              </div>
            ))}
          </div>
          <h1>no pokemon</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
