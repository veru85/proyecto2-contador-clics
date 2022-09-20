import React from 'react';

function Boton({texto, esBotonClic, manejarClic}){    //recibimos 3 props
  return (
    <button 
    className={esBotonClic ? "boton-clic" : "boton-reiniciar"}  //operador ternario para decidir estilo
    onClick={manejarClic}>
      {texto}
    </button>
  )
}

export default Boton;