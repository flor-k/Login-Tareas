const {model, Schema} = require('mongoose')

const mensajeSchema = new Schema({
    idUser: {type: String, required: true},
    idPost: {type: String, required: true},
    userName: {type: String, required: true},
    texto: {type: String, required: true},
    
})

module.exports = model('Mensaje', mensajeSchema )