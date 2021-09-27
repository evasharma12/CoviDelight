const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/User");
const Blog = require("./models/Blog");

require("dotenv").config();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.use(express.json());


if(process.env.NODE_ENV === "production"){
  app.use(express.static('Client/build'));
}
let login = false;
let info;
let input;
let blogs;

app.get("/", (req, res) => {
  info = [];
//   res.send();
if(login){
    Blog.find({}, function(err,allBlogs){
      if(err){
        console.log(err);
      } else{
        blogs = allBlogs;
        info.push(input);
        info.push(blogs);
        // console.log(allBlogs);
      }
    res.send(info);
      
    })
}
});

app.post("/", (req, res) => {
  res.send(input);
  console.log("Blog connected to node");
});

//ADD BLOG TO DATABASE
app.post("/add-blog", (req,res)=>{
  const newBlog = JSON.parse(JSON.stringify(req.body));
  console.log(newBlog);
  const blog = new Blog({
    id: newBlog.id,
    name: newBlog.name,
    title: newBlog.title,
    category: newBlog.category,
    imageURL: newBlog.imageURL,
    content: newBlog.content,
  }); 
  blog.save(function(err){
    if(err){
      console.log(err);
    } else{
      console.log("Blog saved to db");
    }
  })
  res.redirect("/");
})

app.post("/login", (req, res) => {
  input = JSON.parse(JSON.stringify(req.body));
  // console.log(input);
  if (input.name) {
    const user = new User({
      name: input.name,
      email: input.email,
      password: input.password,
    });
    user.save(function (err) {
      if (err) {
        console.log(err);
        res.send("Error! Please try again");
      } else {
        console.log(`${input.name}'s data saved.`);
        login = true;
        res.redirect("/");
      }
    });
  } else {
    User.find(
      { email: input.email, password: input.password },
      function (err, user) {
        if (err) {
          console.log(err);
        } else {
          if (!user[0]) {
            console.log("user not found");
            res.send("Error! Please try again");
          } else {
            // console.log(user);
            login = true;
            input = user;
            info.push(input);
            res.redirect("/");
          }
        }
      }
    );
  }
});


app.post("/logout",(req,res)=>{
    login = false;
    res.redirect("/");
});



// TOUR PAGES


app.get("/tour",(req,res)=>{
  res.send("Tour page");
});


app.get('*',(req,res)=>{
  res.send("Error!");
})
app.listen(process.env.PORT || 8000, () => {
  console.log("Server started at port 8000");
});

// 'use strict'

// const crypto = require('crypto');
// const url = require('url');

// //https://maps.googleapis.com/maps/api/streetview?location=41.403609,2.174448&size=456x456&key=AIzaSyAte3-5lGfvTA9w1oHi0pcMQerJ40Kbcnw&signature=yXcjEKDEz-bMWPR-FIgqgjWrCjg=
// /**
//  * Convert from 'web safe' base64 to true base64.
//  *
//  * @param  {string} safeEncodedString The code you want to translate
//  *                                    from a web safe form.
//  * @return {string}
//  */
// function removeWebSafe(safeEncodedString) {
//   return safeEncodedString.replace(/-/g, '+').replace(/_/g, '/');
// }

// /**
//  * Convert from true base64 to 'web safe' base64
//  *
//  * @param  {string} encodedString The code you want to translate to a
//  *                                web safe form.
//  * @return {string}
//  */
// function makeWebSafe(encodedString) {
//   return encodedString.replace(/\+/g, '-').replace(/\//g, '_');
// }

// /**
//  * Takes a base64 code and decodes it.
//  *
//  * @param  {string} code The encoded data.
//  * @return {string}
//  */
// function decodeBase64Hash(code) {
//   // "new Buffer(...)" is deprecated. Use Buffer.from if it exists.
//   return Buffer.from ? Buffer.from(code, 'base64') : new Buffer(code, 'base64');
// }

// /**
//  * Takes a key and signs the data with it.
//  *
//  * @param  {string} key  Your unique secret key.
//  * @param  {string} data The url to sign.
//  * @return {string}
//  */
// function encodeBase64Hash(key, data) {
//   return crypto.createHmac('sha1', key).update(data).digest('base64');
// }

// /**
//  * Sign a URL using a secret key.
//  *
//  * @param  {string} path   The url you want to sign.
//  * @param  {string} secret Your unique secret key.
//  * @return {string}
//  */
// app.post("/tour",(req,res)=>{
//   function sign(path, secret) {
//     const uri = url.parse(path);
//     const safeSecret = decodeBase64Hash(removeWebSafe(secret));
//     const hashedSignature = makeWebSafe(encodeBase64Hash(safeSecret, uri.path));
//     console.log(url.format(uri) + '&signature=' + hashedSignature);
//   }
// });
