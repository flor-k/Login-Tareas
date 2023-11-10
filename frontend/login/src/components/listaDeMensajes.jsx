import React, { useState, useEffect } from "react";
import axios from "axios";
import MensajeFormulario from "./mensajeFormulario";

const buscarMensajesServicio = async (idPost) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`http://localhost:4000/getMensajes?idPost=${idPost}`)
            .then((res) => {
                const posts = Array.from(Object.keys(res.data).map(i => res.data[i]));

                resolve(posts);
            })
            .catch((error) => {
                resolve([]);
            });
    })

}


const registroMensajesServicio = (idUser, idPost, texto) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`http://localhost:4000/registroMensaje`, { idUser, idPost, texto })
            .then((res) => {
                resolve();
            })
            .catch((error) => {
                resolve();
            });
    });
}



const ListaDeMensajes = (params) => {

    const [mensajes, setMensajes] = useState([])
    const [idUser, setIdUser] = useState(localStorage.getItem("idUser"));
    



    useEffect(()=>{
        buscarMensajesServicio(params.idPost).then((postRes)=>{
            setMensajes([...postRes]);
        })
    },[])

    const registroMensaje = ( texto) => {
        registroMensajesServicio(idUser, params.idPost, texto).then(() => {
            buscarMensajesServicio(params.idPost).then((postRes) => {
                setMensajes(postRes);
            });
        })
    }


    return (
        <><div>
            <div>
                {
                    mensajes.map((m) =>
                        <p
                            key={m._id}
                            value={m._id}
                        >{m.userName +': '+ m.texto}
                        </p>
                    )
                }
            </div>
            <MensajeFormulario onSubmit={registroMensaje} />
        </div></>
        
        )
}

export default ListaDeMensajes