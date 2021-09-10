const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/User");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());

app.get("/blog", (req,res)=>{
    res.send("Helloo");
});

app.post("/blog", (req,res)=>{
    res.send("Successful");
    console.log("Blog connected to node");
});

app.post("/login", (req,res)=>{
    
    res.send(req.body);
    const input = JSON.parse(JSON.stringify(req.body));
    // console.log(input);
    if(input.name){
        const user = new User({
            name: input.name,
            email: input.email,
            password: input.password,
        } );
        user.save(function(err){
            if(err){
                console.log(err);
            } else{
                console.log(`${input.name}'s data saved.`)
            }
        });
    } else{
        User.find({email: input.email, password: input.password}, function(err,user){
            if(err){
                console.log(err);
            } else{
                if(!user[0]){
                    console.log("user not found");
                } else{
                    console.log(user);
                }
                
            }
        });
    }
})
app.listen(8000, ()=>{
    console.log("Server started at port 8000");
})