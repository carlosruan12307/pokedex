import { useEffect, useState } from "react";
import "./App.css";
import MainPokemons from "./components/MainPokemons";
import ModalPokemon from "./components/ModalPokemon";
import Navbar from "./components/Navbar";

function App() {
  const [data, setdata] = useState();
  const [search, setsearch] = useState("");
  const[dataPokemon,setdataPokemon] = useState({
    data: "",
    colorPokemon: ""
  })
  useEffect(() => {
    getdata();
  }, []);
const changeSearch = (e) =>{
  console.log(e.target.value)
  setsearch(e.target.value)
}
const onClickPokemon = (data,color) =>{
setdataPokemon({...dataPokemon,data : data,color: color});
}
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
      <Navbar  onSearchChange={changeSearch}/>
      <MainPokemons search={search} data={data} onClickPokemon={onClickPokemon} />
      <ModalPokemon pokemon={dataPokemon} />
    </div>
  );
}

export default App;
