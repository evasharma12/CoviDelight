import React, { useState } from "react";
import Blog from "../Blogs/Blog";

function Register() {
  const [isregistered, SetIsRegistered] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleInput(event){
    const {name, value} = event.target;
    console.log(value);
    console.log(name);
    setUserInfo((prevValue)=>{
      return{
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleRegister() {
    setisLoggedIn(true);
  }
  function handleChange() {
    SetIsRegistered(!isregistered);
  }
  return (


        <div>
          <h1>{isregistered ? "Sign In" : "Register Here"}</h1>
          <form method = "post" action = "/login" id = "login-form">
            {!isregistered && (
              <label htmlFor="name">
                Full Name:
                <input required onChange = {handleInput} type="text" id="name" value = {userInfo.name} name="name"></input>
              </label>
            )}
            <label htmlFor="email">
              Email:
              <input required  onChange = {handleInput} type="email" id="email" value = {userInfo.email} name="email"></input>{" "}
            </label>
            <label htmlFor="pass">
              Password:
              <input  required onChange = {handleInput} type="password" id="pass" value = {userInfo.password} name="password"></input>{" "}
            </label>
            <button type = "submit" onClick={handleRegister}>
              {isregistered ? "Sign In" : "Register Here"}
            </button>
          </form>
          <button onClick={handleChange}>
            {isregistered ? "Register" : "Sign In"}
          </button>
        </div>
      

  );
}

export default Register;
