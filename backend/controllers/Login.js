const bcrypt = require('bcrypt')
const User = require('../model/user')

const Login = async (req, res) => {

    const { mail, mailG, nameG,  password } = req.body;
    console.log(req.body)
    if (mailG) {
        User.findOne({ mailG: mailG }).then((user)=>{
            if (!user) {
                const newUser = new User({
                    name: nameG, mail: mailG, mailG
                })

                newUser.save().then((user2)=>{
                    const { id, name } = user2
                    console.log('LLEGUE BACK')
                    res.json({
                        message: 'usuario logueado correctamente',
                        usuario: {
                            id,
                            name
                        }
                    })
                })

            }

        })

    } else {
        User.findOne({ mail }).then((user) => {
            if (!user) {
                res.status(401); //Unathorized
                return res.json({ message: 'usuario no encontrado' })
            }
            bcrypt.compare(password, user.password).then((isCorrect) => {
                if (isCorrect) {
                    const { id, name } = user

                    res.json({
                        message: 'usuario logueado correctamente',
                        usuario: {
                            id,
                            name
                        }
                    })
                } else {
                    res.status(401); // unauthorized
                    return res.json({ message: 'contraseña incorrecta' })
                }
            })
        }
        )
    }
}

module.exports = Login;