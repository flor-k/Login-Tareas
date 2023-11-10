import React, {useState} from 'react';
import '../css/postFormulario.css';

function MensajeFormulario(params){

    const [texto, setTexto] = useState('');



    const manejarCambioTexto = e =>{
      setTexto(e.target.value);
  }

    const manejarEnvio = e => 
    {
        e.preventDefault();
        params.onSubmit(texto);
    }

    return(

        <form 
        onSubmit={manejarEnvio}
      className='post-formulario'
     >
      <input 
        type='text'
        placeholder='Escribe tu mensaje'
        name='post'
        onChange={manejarCambioTexto}
      />
      <button className='post-boton'>
        Agregar Mensaje
      </button>
    </form>
    )


}

export default MensajeFormulario;