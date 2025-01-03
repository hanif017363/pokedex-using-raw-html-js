//* eslint-disable react/prop-types */

import { useContext } from "react";
import cross from "../assets/cross.svg";
import search from "../assets/search.svg";
import { AppCtx } from "../context/AppCtx";

export default function Search() {
  const { inputText, setInputText } = useContext(AppCtx);
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
