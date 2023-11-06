const Usuario = require('../model/user')

const getUserById = async (req, res) =>{

    const {userid} = req.params;
    if(userid?.length === 24){
        Usuario.findById(userid).then((user)=>{
            if(!user){
                return res.json({message: 'usuario no encontrado'})
            }else{
                const {_id, password, __v, ...etc} = user._doc
                res.json(etc)
            }
        })
    }else{
        res.json({message: 'contraseña invalida'})
    }



}

module.exports = getUserById;