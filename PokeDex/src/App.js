import { useEffect, useState } from "react";
import "./App.css";
import MainPokemons from "./components/MainPokemons";
import Navbar from "./components/Navbar";

function App() {
  const [data, setdata] = useState();
  const [search, setsearch] = useState("");

  useEffect(() => {
    getdata();
  }, []);
const changeSearch = (e) =>{
  console.log(e.target.value)
  setsearch(e.target.value)
}
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
      {console.log(data)}
      <Navbar  onSearchChange={changeSearch}/>
      <MainPokemons search={search} data={data} />
    </div>
  );
}

export default App;
