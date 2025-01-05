/* eslint-disable react/prop-types */
export default function Filter({ setFilter, pokemons }) {
  const getTypeCount = (type) => {
    if (type === "all") return pokemons.length;
    return pokemons.filter((pokemon) => pokemon.types.includes(type)).length;
  };
  return (
    <div className="filter-body">
      <div className="filter-wrapper">
        {pokemons && (
          <div className="custom-select-container">
            <select
              defaultValue="select"
              className="filter-wrap"
              name=""
              id="filter"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option className="option-font option" value="select" disabled>
                Select Type &#9662;
              </option>
              <option className="option-font option" value="all">
                All ({getTypeCount("all")})
              </option>
              <option
                className="option-font option"
                style={{ backgroundColor: "#F08030", color: "white" }}
                value="fire"
              >
                fire ({getTypeCount("fire")})
              </option>
              <option
                className="option-font option"
                value="water"
                style={{ backgroundColor: "#6890F0", color: "white" }}
              >
                water ({getTypeCount("water")})
              </option>
              <option
                className="option-font option"
                value="grass"
                style={{ backgroundColor: "#78C850", color: "white" }}
              >
                grass ({getTypeCount("grass")})
              </option>
              <option
                className="option-font option"
                value="electric"
                style={{ backgroundColor: "#F8D030", color: "white" }}
              >
                electric ({getTypeCount("electric")})
              </option>
              <option
                className="option-font option"
                value="normal"
                style={{ backgroundColor: "#A8A878", color: "white" }}
              >
                normal ({getTypeCount("normal")})
              </option>
              <option
                className="option-font option"
                value="ice"
                style={{ backgroundColor: "#98D8D8", color: "white" }}
              >
                ice ({getTypeCount("ice")})
              </option>
              <option
                className="option-font option"
                value="fighting"
                style={{ backgroundColor: "#C03028", color: "white" }}
              >
                fighting ({getTypeCount("fighting")})
              </option>
              <option
                className="option-font option"
                value="poison"
                style={{ backgroundColor: "#A040A0", color: "white" }}
              >
                poison ({getTypeCount("poison")})
              </option>
              <option
                className="option-font option"
                value="ground"
                style={{ backgroundColor: "#E0C068", color: "white" }}
              >
                ground ({getTypeCount("ground")})
              </option>
              <option
                className="option-font option"
                value="flying"
                style={{ backgroundColor: "#A890F0", color: "white" }}
              >
                flying ({getTypeCount("flying")})
              </option>
              <option
                className="option-font option"
                value="psychic"
                style={{ backgroundColor: "#F85888", color: "white" }}
              >
                psychic ({getTypeCount("psychic")})
              </option>
              <option
                className="option-font option"
                value="bug"
                style={{ backgroundColor: "#A8B820", color: "white" }}
              >
                bug ({getTypeCount("bug")})
              </option>
              <option
                className="option-font option"
                value="rock"
                style={{ backgroundColor: "#B8A038", color: "white" }}
              >
                rock ({getTypeCount("rock")})
              </option>
              <option
                className="option-font option"
                value="ghost"
                style={{ backgroundColor: "#705898", color: "white" }}
              >
                ghost ({getTypeCount("ghost")})
              </option>
              <option
                className="option-font option"
                value="dragon"
                style={{ backgroundColor: "#7038F8", color: "white" }}
              >
                dragon ({getTypeCount("dragon")})
              </option>
              <option
                className="option-font option"
                value="dark"
                style={{ backgroundColor: "#705848", color: "white" }}
              >
                dark ({getTypeCount("dark")})
              </option>
              <option
                className="option-font option"
                value="steel"
                style={{ backgroundColor: "#B8B8D0", color: "white" }}
              >
                steel ({getTypeCount("steel")})
              </option>
              <option
                className="option-font option"
                value="fairy"
                style={{ backgroundColor: "#EE99AC", color: "white" }}
              >
                fairy ({getTypeCount("fairy")})
              </option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
