const Mensaje = require('../model/mensaje.js')
const Usuario = require('../model/user')



const registroMensaje = async (req, res) => {

    const { idUser, idPost, texto } = req.body;

    Usuario.findById(idUser).then((user) => {
        let userName = '';
        if (!user) {
            return res.json({ message: 'usuario no encontrado' })
        }
        userName = user.name


        const newMensaje = new Mensaje({
            idUser, idPost, userName, texto
        })

        newMensaje.save().then((p) => {
            res.json({})
        }).catch((err) => {
            console.error(err)
            res.json({ success: false, message: err.toString() })
        })
    })

}


module.exports = registroMensaje;