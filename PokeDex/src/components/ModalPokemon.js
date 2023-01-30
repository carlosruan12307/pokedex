import React, { useEffect } from 'react'

function ModalPokemon({pokemon}) {
    
  return (
    
    <div id='modalP' className='modal'>
       
<div className='modal-dialog'>
<div className='modal-content' style={{backgroundColor: `${pokemon.color}`}}>
<div className='modal-header'>
    
<button data-bs-dismiss="modal" className='btn btn-close btn-danger'></button>
</div>
<div className='modal-body'  >
<img className='pokemon-image-modal' src={pokemon.data? pokemon['data']['sprites']['other']['official-artwork']['front_default'] : "" }></img>
</div>
<div className='modal-footer'>

</div>
</div>
</div>
    </div>
  )
}

export default ModalPokemon