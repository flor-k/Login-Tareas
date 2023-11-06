const bcrypt = require('bcrypt')
const User = require('../model/user')

const Login = async (req, res) => {

    const { mail, password } = req.body;

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

module.exports = Login;