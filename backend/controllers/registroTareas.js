const TareaS = require('../model/tarea.js')

const registroTareas = async (req, res) => {

    const { idUser, tarea, completada } = req.body;
    
            console.log('agregando tarea', idUser, tarea, completada)

            const newTarea = new TareaS({
                idUser, tarea, completada
            })

            newTarea.save().then((tarea) => {
                res.json({ success: true, message: 'tarea creada correctamente', tarea })
            }).catch((err) => {
                console.error(err)
                res.json({ success: false, message: err.toString() })
            })
        
    
}


module.exports = registroTareas;