import React, { useState, useEffect } from "react";
import PostFormulario from "./postFormulario";
import Post from "./post";
import axios from "axios";
import '../css/listaDePost.css';

const buscarPostServicio = async () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`http://localhost:4000/getPosts`)
            .then((res) => {
                const posts = Array.from(Object.keys(res.data).map(i => res.data[i]));

                resolve(posts);
            })
            .catch((error) => {
                resolve([]);
            });
    })

}


const registroPostServicio = (idUser, titulo, post) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`http://localhost:4000/registroPost`, { idUser, titulo, post })
            .then((res) => {
                resolve();
            })
            .catch((error) => {
                resolve();
            });
    });
}



const ListaDePosts = (params) => {

    const [posts, setPosts] = useState([])
    const [idUser, setIdUser] = useState(localStorage.getItem("idUser"));
    const [tituloP, setTituloP] = useState('')
    const [textoP, setTextoP] = useState('')


    useEffect(()=>{
        buscarPostServicio().then((postRes)=>{
            setPosts([...postRes]);
            setTituloP(postRes.titulo);
            setTextoP(postRes.post);
        })
    },[])

    const registroPost = (titulo, texto) => {
        registroPostServicio(idUser, titulo, texto).then(() => {
            buscarPostServicio().then((postRes) => {
                setPosts(postRes);
            });
        })
    }


    return (
        <><div className='listaDePosts'>
            <h1>Posts</h1>
            <PostFormulario onSubmit={registroPost} />
            <div className='posts-lista-contenedor'>
                {
                    posts.map((post) =>
                        <button
                            key={post._id}
                            onClick = {params.irAPost}
                            value={post._id}
                        >{post.titulo}
                        </button>
                    )
                }
            </div>
        </div></>
        
        )
}

export default ListaDePosts