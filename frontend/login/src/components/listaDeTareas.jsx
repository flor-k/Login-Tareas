import React, { useState, useEffect } from 'react';
import TareaFormulario from './tareaFormulario.jsx';
import '../css/listaDeTareas.css';
import Tarea from './tarea.jsx';
import axios from "axios";

const buscarTareasServicio = async (idUser) => {
    return new Promise((resolve, reject)=>{
        axios
        .get(`http://localhost:4000/getTareas?idUser=${idUser}`)
        .then((res) => {
            // Object.keys(res.data) => ['0','1']
            const tareas = Array.from(Object.keys(res.data).map(i=> res.data[i]));

            resolve(tareas);
        })
        .catch((error) => {
            resolve([]);
        });
    })
    
}

const eliminarTareaServicio =  (idTarea) => {
    return new Promise((resolve, reject)=>{
     axios
        .post(`http://localhost:4000/eliminarTarea`, { id:idTarea })
        .then((res) => {
            console.log('respuesta eliminar recibida')
            resolve();
        })
        .catch((error) => {
            console.log('respuesta eliminar recibida ERROR')
            resolve();
        });
    });
}

const registroTareasServicio = (idUser, tarea, completada) => {
    return new Promise((resolve, reject)=>{
         axios
            .post(`http://localhost:4000/registroTareas`, { idUser, tarea, completada })
            .then((res) => {
                resolve();
            })
            .catch((error) => {
                resolve();
            });
    });
}

const modificarTareaServicio = (idTarea,completada, tarea ) => {
    return new Promise((resolve, reject)=>{
    axios
        .post(`http://localhost:4000/modificarTarea`, { idTarea, tarea, completada})
        .then((res) => {
            resolve();
        })
        .catch((error) => {
            resolve();
        });

    })
}




function ListaDeTareas(params) {

    const [tareas, setTareas] = useState([]);
    const [idUser, setIdUser] = useState(localStorage.getItem("idUser"));

    useEffect(()=>{
        buscarTareasServicio(idUser).then((tareasRes)=>{
            setTareas([...tareasRes]);
        })
    },[])
    

    const eliminarTarea = (key)=>{
        console.log('click en eliminar tarea')
        eliminarTareaServicio(key).then(()=>{
            console.log('tarea eliminada')
            buscarTareasServicio(idUser).then((tareasRes)=>{
                console.log('actualizando tareas luego de eliminar')
                setTareas([...tareasRes]);
            });
        })
    }

    const registroTareas = (tarea, completada)=>{
        registroTareasServicio(idUser,tarea, completada).then(()=>{
            buscarTareasServicio(idUser).then((tareasRes)=>{
                console.log('registroTareas',tareasRes, idUser)
                setTareas(tareasRes);
            });
        })
        
        
    }


    const completarTarea = (id, completada, texto)=>{
        modificarTareaServicio(id, completada, texto).then(()=>{
            buscarTareasServicio(idUser).then((tareasRes)=>{
                setTareas(tareasRes);
            });
        })
        

    }


   
    return (
        <div className='listaDeTareas'>
            <h1>Mis Tareas</h1>
            <TareaFormulario onSubmit={registroTareas} />
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea._id}
                            id={tarea._id}
                            idUser={tarea.idUser}
                            texto={tarea.tarea}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea} />
                    )
                }
            </div>
        </div>


    );


}

export default ListaDeTareas;