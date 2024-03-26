const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    
    categoryName:{
        type: String,
        required: true,
        unique: true
    }
},{ timestamps: true, versionKey:false})


const CategoryModel = mongoose.model("categories", categorySchema);

module.exports = CategoryModel;