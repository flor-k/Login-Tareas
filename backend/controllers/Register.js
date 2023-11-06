const bcrypt = require('bcrypt')
const User = require('../model/user.js')


const Register = async (req, res) =>{

    const {name, mail, password} = req.body;

    User.findOne({ mail}).then((user) =>{
        if(user){
            res.status(409);//Conflict
            return res.json({ success:false, message: 'ya existe un usuario con ese mail'})
        }else if(!name || !mail || !password){
            return res.json({success:false,message: 'faltan datos'})
        }else{
            bcrypt.hash(password, 10, (err, passHash)=>{
                if(err){
                    res.json(err)
                }else{
                    const newUser = new User({
                        name, mail, password: passHash
                    })

                    newUser.save().then((user)=>{
                        res.json({success:true,message: 'usuario creado correctamente', user})
                    }).catch((err)=>{
                        console.error(err)
                        res.json({success:false,message: err.toString()})
                    })
                }
            })
        }
    })




}

module.exports = Register;