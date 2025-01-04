/* eslint-disable react/prop-types */
export default function Filter({ setFilter }) {
  return (
    <div className="filter-body">
      <div className="filter-wrapper">
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
              All
            </option>
            <option
              className="option-font option"
              style={{ backgroundColor: "#F08030", color: "white" }}
              value="fire"
            >
              fire
            </option>
            <option
              className="option-font option"
              value="water"
              style={{ backgroundColor: "#6890F0", color: "white" }}
            >
              water
            </option>
            <option
              className="option-font option"
              value="grass"
              style={{ backgroundColor: "#78C850", color: "white" }}
            >
              grass
            </option>
            <option
              className="option-font option"
              value="electric"
              style={{ backgroundColor: "#F8D030", color: "white" }}
            >
              electric
            </option>
            <option
              className="option-font option"
              value="normal"
              style={{ backgroundColor: "#A8A878", color: "white" }}
            >
              normal
            </option>
            <option
              className="option-font option"
              value="ice"
              style={{ backgroundColor: "#98D8D8", color: "white" }}
            >
              ice
            </option>
            <option
              className="option-font option"
              value="fighting"
              style={{ backgroundColor: "#C03028", color: "white" }}
            >
              fighting
            </option>
            <option
              className="option-font option"
              value="poison"
              style={{ backgroundColor: "#A040A0", color: "white" }}
            >
              poison
            </option>
            <option
              className="option-font option"
              value="ground"
              style={{ backgroundColor: "#E0C068", color: "white" }}
            >
              ground
            </option>
            <option
              className="option-font option"
              value="flying"
              style={{ backgroundColor: "#A890F0", color: "white" }}
            >
              flying
            </option>
            <option
              className="option-font option"
              value="psychic"
              style={{ backgroundColor: "#F85888", color: "white" }}
            >
              psychic
            </option>
            <option
              className="option-font option"
              value="bug"
              style={{ backgroundColor: "#A8B820", color: "white" }}
            >
              bug
            </option>
            <option
              className="option-font option"
              value="rock"
              style={{ backgroundColor: "#B8A038", color: "white" }}
            >
              rock
            </option>
            <option
              className="option-font option"
              value="ghost"
              style={{ backgroundColor: "#705898", color: "white" }}
            >
              ghost
            </option>
            <option
              className="option-font option"
              value="dragon"
              style={{ backgroundColor: "#7038F8", color: "white" }}
            >
              dragon
            </option>
            <option
              className="option-font option"
              value="dark"
              style={{ backgroundColor: "#705848", color: "white" }}
            >
              dark
            </option>
            <option
              className="option-font option"
              value="steel"
              style={{ backgroundColor: "#B8B8D0", color: "white" }}
            >
              steel
            </option>
            <option
              className="option-font option"
              value="fairy"
              style={{ backgroundColor: "#EE99AC", color: "white" }}
            >
              fairy
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
