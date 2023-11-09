import React from "react";
import '../css/post.css';

function Post({ ...params}) {

    return (
        <div>
            <div className='tarea-contenedor'>
                {params.titulo}
            </div>

        </div>

    );


}

export default Post;