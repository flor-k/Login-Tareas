import React from "react";
import Menu from "./menu";
import PaginaActual from "./paginaActual";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/welcome.css';
import { googleLogout } from '@react-oauth/google';

const Welcome = ()=>{
  const [codigoPagina, setCodigoPagina] = useState('')
  const navigate = useNavigate();
  const irAPagina = (codigo)=>{
    if(codigo=='SALIR'){
      googleLogout();
      navigate("/login");
    }else{setCodigoPagina(codigo)}
  }

  const [idPost, setIdPost] = useState()
    const irAPost = (e)=>{
      if(e){
        setIdPost(e.target.value)
      }else{
        setIdPost(null)
      }
    }

    return(
        <div className="welcome">
            <Menu funcionMenu = {irAPagina}  irAPost={irAPost}/>
            <PaginaActual codigoPagina = {codigoPagina}  irAPost={irAPost} irAPagina={irAPagina} idPost={idPost}/>
      </div>
    )
}

export default Welcome