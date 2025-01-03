import Search from "../components/Search";
import Title from "../components/Title";
import "../App.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Title />
      <Search />
      <div className="title-button">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active-link" : "not-link")}
        >
          <i className="fa-solid fa-house"></i>
        </NavLink>
        <NavLink
          to={"/favourite"}
          className={({ isActive }) => (isActive ? "active-link" : "not-link")}
        >
          <i className="fa-regular fa-heart"></i>
        </NavLink>
        <NavLink
          to={"/deck"}
          className={({ isActive }) => (isActive ? "active-link" : "not-link")}
        >
          <img src="/src/assets/pokeball.svg" alt="" />
        </NavLink>
      </div>
      <div id="details">
        <Outlet />
      </div>
    </>
  );
}
