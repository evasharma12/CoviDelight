const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.get("/blog", (req,res)=>{
    res.send("Helloo");
});

app.post("/blog", (req,res)=>{
    res.send("Successful");
    console.log("Blog connected to node");
});

app.post("/login", (req,res)=>{
    console.log(req.body);
    res.send(req.body);
})
app.listen(8000, ()=>{
    console.log("Server started at port 8000");
})