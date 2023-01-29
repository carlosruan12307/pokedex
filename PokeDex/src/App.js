import { useEffect,  useState } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState();

  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=10", {
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
      <nav className="navbar navbar-expand-md   bg-dark">
        <button
          data-bs-toggle="collapse"
          data-bs-target="#teste"
          className="navbar-toggler bg-white"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul id="teste" className="navbar-nav navbar-collapse collapse ">
          <li className="nav-item ">
            <a href="*" className="nav-link text-white">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="*" className="nav-link text-white">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="*" className="nav-link text-white">Inicio</a>
          </li>
        </ul>
      </nav>
      {data ? (
        data.map((data) => {
          return (
            <img
              alt=""
              key={data.sprites.front_default}
              src={data.sprites.front_default}
            ></img>
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
  );
}

export default App;
