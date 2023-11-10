const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    name: {type: String, required: true},
    mail: {type: String, required: true},
    mailG: {type: String, required: false},
    password: {type: String, required: false}
})

module.exports = model('User', userSchema )