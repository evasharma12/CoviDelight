import React, { useState, useEffect } from "react";
import axios from "axios";
import Register from "./Register";
import Blog from "../Blogs/Blog";
import StartPage from "./StartPage";

function Start() {
  const [register, setRegister] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [blog, setBlog] = useState(false);
  const [tour, setTour] = useState(false);
  const [userName, setUserName] = useState("");
  // const [userEmail, setUserEmail] = useState("");
  // const [userPassword, setUserPassword] = useState("");
  const [userID, setUserID] = useState("");

  useEffect(() => {
    getUser();
  },[]);


  const getUser = async () => {
    const res = await axios.get("http://localhost:8000/")
      // console.log(res);
      const userInfo = res.data[0];
      setUserName(userInfo[0].name);
      setUserID(userInfo[0]._id);
    console.log(userInfo[0]);
    
    if (res.status === 200) {
      setisLoggedIn(true);
    }
  };

  function HandleClick() {
    // console.log("triggered");
    setRegister(true);
  }

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          {!register && (
            <div id="start-div">

              <StartPage Click = {HandleClick}/>
            </div>
          )}
          {register && <Register />}
        </div>
      ) : (
        <div>
          <Blog name = {userName} id = {userID}/>
          
        </div>
      )}
    </div>
  );
}

export default Start;
