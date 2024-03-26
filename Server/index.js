const app = require("./app");
require('dotenv').config();
const mongoose = require('mongoose');


try {

    mongoose.connect("mongodb+srv://Shamim_96:12345@cluster0.n9cylyz.mongodb.net/NewsPortal");
    console.log("Database connected");
    
} catch (error) {
    
    console.log(error);
}



const port = process.env.PORT || 5000;


app.listen(port, ()=> {
    console.log("Server is running on port " + port);
})