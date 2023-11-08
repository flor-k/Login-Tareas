const mongoose = require('mongoose')

const MONGO_URL = 'mongodb+srv://:@cluster0.blgpxbv.mongodb.net/?retryWrites=true&w=majority'

const db = async ()=>{
    await mongoose.connect(MONGO_URL)
    .then(()=>{ console.log('CONEXION A BASE DE DATOS ABIERTA')})
    .catch((err)=>{console.log(err)})
}

 
module.exports = db