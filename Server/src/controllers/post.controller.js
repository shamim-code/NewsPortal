const postModel = require("../models/post.model");



const getPostByCategory = async(req, res) => {

    try {

        const posts = await postModel.find({category: req.params.categoryName});
        res.send(posts);
        
    } catch (error) {
        res.send(error);
    }
    
}


const latestPost = async(req, res) => {

    try {

        const posts = await postModel.find().limit(10).sort({createdAt: -1});
        res.send(posts);
        
    } catch (error) {
        res.send(error);
    }
    
}


const detailsPost = async(req, res) => {

    try {
        const posts = await postModel.findOne({title: req.params.title});
        res.send(posts);
        
    } catch (error) {
        res.send(error);
    }
    
}



module.exports = {getPostByCategory,latestPost, detailsPost};