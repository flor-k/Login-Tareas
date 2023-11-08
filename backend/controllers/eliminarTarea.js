const TareaS = require('../model/tarea.js')


const eliminarTarea = async (req, res) =>{
   console.log(req.body)
    try {
        await TareaS.deleteOne( { "_id" : req.body.id } );
        res.json({})
     } catch (e) {
        console.log(e);
        res.json({})
     }

}

module.exports = eliminarTarea;