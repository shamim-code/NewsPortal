const express = require('express');
const postRoutes = require('./src/routes/post.routes');
const cors = require('cors');
const path = require('path');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use(postRoutes);

app.get("/", (req, res) => {
    res.send("Hello, world!");
})

app.get("*",(req, res) => {
    res.send("This is default page");
})

module.exports = app;