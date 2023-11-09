const Post = require('../model/post')

const getPosts = async (req, res) => {

    const id = req.query?.id;
    if(id){
        const post = await Post.find({_id: id})
        res.send(post[0])
    }else{
        const posts = await Post.find({})
    
    if (posts) {
        
        res.send({...posts});
       

    } else {
        res.send({})
        console.log('ERROR')

    }
}





}

module.exports = getPosts;