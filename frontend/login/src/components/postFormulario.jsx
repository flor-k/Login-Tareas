import React, {useState} from 'react';
import '../css/postFormulario.css';

function PostFormulario(params){

    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');

    const manejarCambio = e =>{
      setTitulo(e.target.value);
    }

    const manejarCambioTexto = e =>{
      setTexto(e.target.value);
  }

    const manejarEnvio = e => 
    {
        e.preventDefault();
        params.onSubmit(titulo, texto);
    }

    return(

        <form 
        onSubmit={manejarEnvio}
      className='post-formulario'
     >
      <input 
        className='titulo-input'
        type='text'
        placeholder='Escribe un titulo'
        name='texto'
        onChange={manejarCambio}
      />
      <input 
        className='post-input'
        type='text'
        placeholder='Escribe tu post'
        name='post'
        onChange={manejarCambioTexto}
      />
      <button className='post-boton'>
        Agregar Post
      </button>
    </form>
    )


}

export default PostFormulario;