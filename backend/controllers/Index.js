const register = require('./Register.js');
const login = require('./Login.js');
const getUserById = require('./getUserById.js');
const registroTareas = require('./registroTareas.js');
const registroPost = require('./registroPost.js');
const eliminarTarea = require('./eliminarTarea.js')
const getTareas = require('./getTareas.js')
const getPosts = require('./getPosts.js')
const modificarTarea = require('./modificarTarea.js')

module.exports = {
    register, login, getUserById, registroTareas, eliminarTarea, getTareas, modificarTarea, getPosts, registroPost
}