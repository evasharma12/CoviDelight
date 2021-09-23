const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});
console.log("Blog connection open");

const blogSchema = new mongoose.Schema({
    id: String,
    name: String,
    title: String,
    category: String,
    imageURL: String,
    content: String,
});

module.exports = mongoose.model('Blog',blogSchema );
