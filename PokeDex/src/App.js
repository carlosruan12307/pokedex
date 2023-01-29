import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState();
  var colors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };
  var color = "";
  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=100", {
      method: "get",
    })
      .then((res) => res.json())

      .then((res) => res.results.map((e) => e.url))
      .then((urls) => Promise.all(urls.map((url) => fetch(url))))
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) => setdata(data));
  }
  return (
    <div>
      {console.log(data)}
      <nav className="navbar  navbar-expand-md   bg-dark">
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
      <div className="row container-fluid  container_pokemons">
        {data ? (
          data.map((data) => {
            Object.keys(colors).map((key) => {
              if (data.types[0].type.name === key) {
                color = colors[key];
                console.log(color);
              }
            });

            return (
              <div className="card" style={{ backgroundColor: `${color}` }}>
                <div className="card-body">
                  <img
                    className="pokemon  w-100"
                    alt=""
                    key={data.sprites.front_default}
                    src={data.sprites.front_default}
                  ></img>
                </div>
              </div>
            );
          })
        ) : (
          <div className="d-flex pai">
            <div className="load"></div>
            <div className="load"></div>
            <div className="load"></div>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default App;
