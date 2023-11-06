import React from "react";
import ListaDeTareas from "./listaDeTareas";

const Welcome = ()=>{
    return(
        <><div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
      </div></>
    )
}

export default Welcome