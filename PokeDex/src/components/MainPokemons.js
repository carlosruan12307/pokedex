import React from "react";

function MainPokemons({ data,search }) {
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
  return (
    <div className="row container-fluid  container_pokemons">
      {data ? (
        data.map((data) => {
          var color = "";
          var type = data.types[0].type.name;
          Object.keys(colors).map((key) => {
            if (type === key) {
              color = colors[key];
            }
          });
          if (data.name.includes(search)) {
            return (
              <div data-bs-toggle="modal" data-bs-target="#modalP"  className="card" style={{ backgroundColor: `${color}` }}>
                <div className="card-header">
                  <img
                    className="pokemon  w-100"
                    alt=""
                    key={data.id}
                    id={data.id}
                    
                    src={data['sprites']['other']['official-artwork']['front_default']}
                  ></img>
                </div>
                <div className="card-body">
                <h5>{"#" + data.id}</h5>
                  <h3 className="h-colorido">{data.name}</h3>
                
                </div>
              </div>
            );
          }
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

export default MainPokemons;
