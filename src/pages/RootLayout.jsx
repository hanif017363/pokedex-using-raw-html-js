import Search from "../components/Search";
import Title from "../components/Title";
import "../App.css";

import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="container">
        <Title />
        <div className="header-section">
          <Search />
          <div className="title-button">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "active-link" : "not-link"
              }
            >
              <i className="fa-solid fa-house"></i>
            </NavLink>
            <NavLink
              to={"/favourite"}
              className={({ isActive }) =>
                isActive ? "active-link" : "not-link"
              }
            >
              <i className="fa-regular fa-heart"></i>
            </NavLink>
          </div>
        </div>
        <div id="details">
          <Outlet />
        </div>
      </div>
    </>
  );
}
