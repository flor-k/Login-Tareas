import React from "react";
import ListaDeTareas from "./listaDeTareas";




const PaginaTareas = ()=>{

    const urlSearchString = window.location.search;
    const params = new URLSearchParams(urlSearchString);
    const idUser = params.get('id');
    return(
        <><div className='tareas-lista-principal'>
          <ComponenteMenu/>
          {Tareas?
          <>
        <h1>Mis Tareas</h1>
        <ListaDeTareas idUser={idUser}/>
        </>
        :<><h1>Posts</h1>
        <ListadePosts idUser={idUser}/>
        </>
        }
      </div></>
    )
}

export default PaginaTareas