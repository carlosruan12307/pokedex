import React from "react";
import pokedex from "../assets/pokedx.png";
function Navbar({ onSearchChange }) {
  return (
    <nav className="navbar  navbar-expand-md container-fluid ">
      {/* <button
        data-bs-toggle="collapse"
        data-bs-target="#teste"
        className="navbar-toggler ms-3 bg-white"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}

      <img alt="" src={pokedex} className="pokedex mb-3"></img>
      <input
        onChange={(e) => onSearchChange(e)}
        placeholder="Buscar Pokemon"
        className="search mb-3 w-75"
        type={"search"}
      ></input>
    </nav>
  );
}

export default Navbar;
