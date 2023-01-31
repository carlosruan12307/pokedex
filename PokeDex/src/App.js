import { useEffect, useState } from "react";
import "./App.css";
import MainPokemons from "./components/MainPokemons";
import ModalPokemon from "./components/ModalPokemon";
import Navbar from "./components/Navbar";

function App() {
  const [data, setdata] = useState();
  const [search, setsearch] = useState("");
  const [dataPokemon, setdataPokemon] = useState({
    data: "",
    color: "",
  });
  useEffect(() => {
    getdata();
  }, []);
  window.onclick = function (e) {
    if (e.target === document.getElementById("modalP")) {
      document.getElementById("modalP").classList.remove("show");
      document.getElementById("modalP").classList.remove("d-block");
    }
  };

  const changeSearch = (e) => {
    setsearch(e.target.value);
  };
  const onClickPokemon = (data, color, e) => {
    setdataPokemon({ ...dataPokemon, data: data, color: color });
    document.getElementById("modalP").classList.add("show");
    document.getElementById("modalP").classList.add("d-block");
  };
  async function getdata() {
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=200", {
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
      <Navbar onSearchChange={changeSearch} />
      <MainPokemons
        search={search}
        data={data}
        onClickPokemon={onClickPokemon}
      />
      {dataPokemon.data ? <ModalPokemon pokemon={dataPokemon} /> : ""}
    </div>
  );
}

export default App;
