import React from "react";
import pokedex from '../assets/pokedx.png'
function Navbar({onSearchChange}) {
  return (
    <nav className="navbar  navbar-expand-md">
      {/* <button
        data-bs-toggle="collapse"
        data-bs-target="#teste"
        className="navbar-toggler ms-3 bg-white"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      

      <img alt="" src={pokedex} className="pokedex"></img>
       <input onChange={(e) => onSearchChange(e)} placeholder="search" className="search" type={"search"}></input>
      
    </nav>
  );
}

export default Navbar;
