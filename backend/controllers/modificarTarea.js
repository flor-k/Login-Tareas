const TareaS = require('../model/tarea.js')

const modificarTarea = async (req, res) => {
    const { idTarea, tarea, completada } = req.body;

    const filter = { _id: idTarea };
    const update = { completada: completada, tarea: tarea };

    TareaS.findOneAndUpdate(filter, update).then((tarea) => {
        if (!tarea) {
            res.status(401); //Unathorized
            return res.json({ message: 'tarea no encontrado' })
        }
        return res.json({})

    })


}


module.exports = modificarTarea;