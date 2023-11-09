import React, {useState} from 'react';
import '../css/tareaFormulario.css';

function TareaFormulario(params){

    const [input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value);
    }

    const manejarEnvio = e => 
    {
        e.preventDefault();
        params.onSubmit(input, false);
    }

    return(

        <form 
        onSubmit={manejarEnvio}
      className='tarea-formulario'
     >
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
    )


}

export default TareaFormulario;