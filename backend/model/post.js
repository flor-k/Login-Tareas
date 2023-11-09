const {model, Schema} = require('mongoose')

const postSchema = new Schema({
    idUser: {type: String, required: true},
    titulo: {type: String, required: true},
    post: {type: String, required: true},
    
})

module.exports = model('Post', postSchema )