/* eslint-disable react/prop-types */

import cross from "../assets/cross.svg";
import search from "../assets/search.svg";

export default function Search({ inputText, setInputText }) {
  return (
    <div>
      <div className="search-wrapper">
        <img src={search} alt="" />

        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value.toLowerCase())}
        />
        <img src={cross} alt="" onClick={() => setInputText("")} />
      </div>
    </div>
  );
}
