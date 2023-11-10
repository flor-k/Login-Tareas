import React, { useState, useEffect } from "react";
import axios from "axios";
import ListaDeMensajes from "./listaDeMensajes";


const buscarPostServicio = async (idPost) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`http://localhost:4000/getPosts?id=${idPost}`)
            .then((res) => {
                resolve(res.data);
            })
            .catch((error) => {
                resolve([]);
            });
    })

}

const buscarDatosUsuario = async (idUser) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`http://localhost:4000/user?userid=${idUser}`)
            .then((res) => {
                
                resolve(res.data);
            })
            .catch((error) => {
                resolve([]);
            });
    })

}

function PostUnico({...params}) {

    const [tituloP, setTituloP] = useState('')
    const [textoP, setTextoP] = useState('')
    const [name, setName] = useState('')
    
    
    useEffect(()=>{
        
        buscarPostServicio(params.idPost).then((postRes)=>{
            setTituloP(postRes.titulo);
            setTextoP(postRes.post);
            buscarDatosUsuario(postRes.idUser).then((postData)=>{
                setName(postData.name)

            })
            })
            
        
    },[])


    return (
        <div>
            <div

                className='tarea-contenedor'
                >
                {tituloP+' Publicado por: '+name}
                <div className="texto-completo">
                    {textoP}

                </div>

            </div>

            <ListaDeMensajes idPost={params.idPost}/>

        </div>

    );

}

export default PostUnico;