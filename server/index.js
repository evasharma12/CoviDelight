const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/User");

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

app.get("/blog", (req, res) => {
//   res.send();
if(login){
    res.send();
}
});

app.post("/blog", (req, res) => {
  res.send("Successful");
  console.log("Blog connected to node");
});

app.post("/login", (req, res) => {
  const input = JSON.parse(JSON.stringify(req.body));
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
app.listen(8000, () => {
  console.log("Server started at port 8000");
});
