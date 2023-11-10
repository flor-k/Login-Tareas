import React, {useState} from "react";
import ListaDeTareas from "./listaDeTareas";
import ListaDePosts from "./listaDePosts";
import '../css/paginaActual.css';
import PostUnico from "./postUnico";
import Mapa from "./mapa.jsx";


const PaginaActual = (params)=>{

    


return(
    params.idPost? <PostUnico idPost = {params.idPost}/> :
    params.codigoPagina == 'TAREAS' ? <ListaDeTareas /> :
    params.codigoPagina == 'POSTS' ? <ListaDePosts irAPost={params.irAPost}/>:
    <Mapa /> 
    
)


}

export default PaginaActual;