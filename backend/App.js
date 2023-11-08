const express = require('express')
const cors = require('cors');
const db = require('./database/db')
const app = express();

const controllers = require('./controllers/Index.js');


app.use(cors())
app.use(express.json())

app.get('/user/:userid', controllers.getUserById)
app.post('/login', controllers.login)
app.post('/register', controllers.register)
app.post('/registroTareas', controllers.registroTareas)
app.post('/eliminarTarea', controllers.eliminarTarea)
app.get('/getTareas', controllers.getTareas)
app.post('/modificarTarea', controllers.modificarTarea)

const PORT = 4000

app.listen(PORT, ()=>{
    console.log(`SERVER EXPRESS FUNCIONANDO EN EL PUERTO ${PORT}`)
    db();
})

module.exports = app