const CategoryModel = require("../models/category.model");

const createCategory = async (req, res) => {
    
    try {

        const category = {
            categoryName: req.body.categoryName,
        }

        const newCategory = new CategoryModel(category);
        newCategory.save();

        res.send(newCategory);
        
    } catch (error) {

        res.send(error);
    }
}


const getCategory = async(req, res) => {

    try {

        const categories = await CategoryModel.find();
        res.send(categories);
        
    } catch (error) {
        
        res.send(error);
    }
}


module.exports = {createCategory,getCategory};