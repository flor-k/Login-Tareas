const {model, Schema} = require('mongoose')

const tareaSchema = new Schema({
    idUser: {type: String, required: true},
    tarea: {type: String, required: true},
    completada: {type: Boolean, required: true},
})

module.exports = model('TareaS', tareaSchema )