const Mensaje = require('../model/mensaje')

const getPosts = async (req, res) => {

    const idPost = req.query?.idPost;
    if(idPost){
        const post = await Mensaje.find({idPost: idPost})
        res.send(post)
    }else{
        res.send()
    }
}

module.exports = getPosts;