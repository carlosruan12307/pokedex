import React, { useEffect } from 'react'

function ModalPokemon({pokemon}) {
    
  return (
    
    <div id='modalP' className='modal'>
       
<div className='modal-dialog'>
    <div className='container-float'>
    <img  className='pokemon-image-modal' src={pokemon.data? pokemon['data']['sprites']['other']['official-artwork']['front_default'] : "" }></img>    

    </div>

<div className='modal-content' style={{backgroundColor: `${pokemon.color}`}}>
<div className='modal-header'>
{/* <button data-bs-dismiss="modal" className='btn btn-close btn-danger'></button> */}
</div>

<div className='modal-footer d-block'>
<h1>{pokemon.data.height}m</h1>
<h1>{pokemon.data.weight}kg</h1>
<h1>{pokemon.data.types[0].type.name}</h1>
<h1>{pokemon.data.base_experience}xp</h1>
<h1>{pokemon.data.stats[0].base_stat}hp</h1>
</div>
</div>
</div>
    </div>
  )
}

export default ModalPokemon