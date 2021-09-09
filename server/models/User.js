const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    blogs: {
        imgURL: String,
        title: String,
        content: String,
    },
});

module.exports = mongoose.model('User', userSchema);

