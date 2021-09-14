const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});
console.log("Mongoose connection open");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('User', userSchema);

