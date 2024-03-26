const { createCategory,getCategory } = require("../controllers/category.controller");
const {getPostByCategory, latestPost, detailsPost } = require("../controllers/post.controller");
const postModel = require('../models/post.model');
const fs = require('fs');
const path = require('path');

const postRoutes = require("express").Router();


//Create and get category
postRoutes.post("/category/create", createCategory);
postRoutes.get("/category/getAll", getCategory);



//Create post
postRoutes.post("/post/create", async function (req, res) {
    try {

        const post = {
            title: req.body.title,
            postDescription : req.body.desc, 
            category: req.body.category,
            postImage: req.body.image
        }

        const newPost = await postModel(post);
        newPost.save();
        res.send({postStatus: "success", data: newPost});
        
    } catch (error) {
        
        res.send(error.message);
    }
  });




//get post by category

postRoutes.get("/post/:categoryName", getPostByCategory);


//get lastest port
postRoutes.get("/latest", latestPost);


//Details

postRoutes.get("/details/:title", detailsPost);



module.exports = postRoutes;