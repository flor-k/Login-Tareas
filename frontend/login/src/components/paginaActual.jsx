import React, {useState} from "react";
import ListaDeTareas from "./listaDeTareas";
import ListaDePosts from "./listaDePosts";
import '../css/paginaActual.css';
import PostUnico from "./postUnico";



const PaginaActual = (params)=>{

    


return(
    params.idPost? <PostUnico idPost = {params.idPost}/> :
    params.codigoPagina == 'TAREAS' ? <ListaDeTareas /> : <ListaDePosts irAPost={params.irAPost} />
    
)


}

export default PaginaActual;