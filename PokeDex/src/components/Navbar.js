import React from "react";

function Navbar() {
  return (
    <nav className="navbar  navbar-expand-md">
      <button
        data-bs-toggle="collapse"
        data-bs-target="#teste"
        className="navbar-toggler ms-3 bg-white"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <ul id="teste" className="navbar-nav navbar-collapse collapse ">
        <li className="nav-item ">
          <a href="*" className="nav-link text-white">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a href="*" className="nav-link text-white">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a href="*" className="nav-link text-white">
            Inicio
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
