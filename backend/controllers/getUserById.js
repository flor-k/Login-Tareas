const Usuario = require('../model/user')

const getUserById = async (req, res) =>{

    const userid = req.query?.userid;
    console.log(userid)
        Usuario.findById(userid).then((user)=>{
            if(!user){
                return res.json({message: 'usuario no encontrado'})
            }else{
                const {_id, password, __v, ...etc} = user._doc
                console.log(etc)
                res.json(etc)
            }
        })
    



}

module.exports = getUserById;