import React, { useState, useEffect } from "react";
import '../css/post.css';
import axios from "axios";



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

function PostUnico({...params}) {

    const [tituloP, setTituloP] = useState('')
    const [textoP, setTextoP] = useState('')
    const [idUser, setiduser] = useState('')

    
    useEffect(()=>{
        
        buscarPostServicio(params.idPost).then((postRes)=>{
            setTituloP(postRes.titulo);
            setTextoP(postRes.post);
            setiduser(postRes.idUser);
        })
    },[])


    return (
        <div>
            <div

                className='tarea-contenedor'
                >
                {tituloP+' IDUSER: '+idUser}
                <div className="texto-completo">
                    {textoP}

                </div>

            </div>

        </div>

    );

}

export default PostUnico;