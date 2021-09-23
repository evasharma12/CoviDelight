const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/User");
const Blog = require("./models/Blog");

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

let login = false;
let info;
let input;
let blogs;

app.get("/blog", (req, res) => {
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

app.post("/blog", (req, res) => {
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
  res.redirect("/blog");
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
        res.redirect("/blog");
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
            res.redirect("/blog");
          }
        }
      }
    );
  }
});


app.post("/logout",(req,res)=>{
    login = false;
    res.redirect("/blog");
})
app.listen(process.env.PORT || 8000, () => {
  console.log("Server started at port 8000");
});
