import React from "react";
import ListaDeTareas from "./listaDeTareas";




const Welcome = ()=>{

    const urlSearchString = window.location.search;
    const params = new URLSearchParams(urlSearchString);
    const idUser = params.get('id');
    return(
        <><div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas idUser={idUser}/>
      </div></>
    )
}

export default Welcome