const Post = require('../model/post.js')

const registroPost = async (req, res) => {

    const { idUser, titulo, post } = req.body;
    

            const newPost = new Post({
                idUser, titulo, post
            })

            newPost.save().then((p) => {
                res.json({ })
            }).catch((err) => {
                console.error(err)
                res.json({ success: false, message: err.toString() })
            })
        
    
}


module.exports = registroPost;