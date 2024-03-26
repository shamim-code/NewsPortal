const mongoose = require("mongoose");


const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    postDescription: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    postImage: {
        type: String,
        default: ""
    }
},{ timestamps: true, versionKey:false})


const postModel = mongoose.model("postes", postSchema);


module.exports = postModel;