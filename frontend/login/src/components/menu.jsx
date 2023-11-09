import React from "react";
import '../css/menu.css';

const Menu = (params)=>{



return(
    <>
    <ul className="leftMenu">
<li><button onClick={()=>{params.funcionMenu('TAREAS'); params.irAPost(null)}}>Tareas</button></li>
<li><button onClick={()=>{params.funcionMenu('POSTS'); params.irAPost(null)}}>Posts</button></li>
<li><button onClick={()=>{params.funcionMenu('SALIR'); params.irAPost(null)}}>Salir</button></li>



    </ul>
    
    
    </>
)


}

export default Menu;