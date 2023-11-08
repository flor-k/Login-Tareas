const TareaS = require('../model/tarea')

const getTareas = async (req, res) => {

    const {idUser} = req.query;
    const tareas = await TareaS.find({idUser: idUser})
    if (tareas) {
        
        res.send({...tareas});
       

    } else {
        res.send({})
        console.log('ERROR')

    }




}

module.exports = getTareas;