import React, { useEffect } from 'react'

function ModalPokemon({pokemon}) {
    
  return (
    <div>
        { pokemon.data?
<div id='modalP' className='modal'>
       
<div className='modal-dialog'>
    <div className='container-float'>
    <img alt='' className='pokemon-image-modal' src={pokemon['data']['sprites']['other']['official-artwork']['front_default']}></img>    

    </div>

<div className='modal-content' style={{backgroundColor: `${pokemon.color}`}}>
<div className='modal-header'>
<button data-bs-dismiss="modal" data-bs-target="#modalP" className='btn btn-close btn-danger me-3'></button>
</div>

<div className='modal-footer'>
    
    <div className='container-stat'>
        <p>Height</p>
    <h4>{pokemon.data.height}m</h4>
    </div>
    <div className='container-stat'>
    <p>Weight</p>
    <h4>{pokemon.data.weight}kg</h4>
    </div>
    <div className='container-stat'>
    <p>Types</p>
    <h4>{pokemon.data.types[0].type.name}{pokemon.data.types[1]? "/" + pokemon.data.types[1].type.name : ""}</h4>
    </div>
    <div className='container-stat'>
    <p>HP</p>
    <h4>{pokemon.data.stats[0].base_stat}hp</h4>

    </div>
    <div className='container-stat'>
    <p>XP</p>
    <h4>{pokemon.data.base_experience}xp</h4>

    </div>



</div>
</div>
</div>

    </div>
    :
    ""
    }
    </div>
    
  )
}

export default ModalPokemon