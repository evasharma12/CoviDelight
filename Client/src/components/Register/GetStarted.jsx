import React, { useState, useEffect } from "react";
import axios from "axios";
import Register from "./Register";
import Blog from "../Blogs/Blog";
import Tour from "../Tour/Tour";
import StartPage from "./StartPage";

function Start() {
  const [blog, setBlog] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [tour, setTour] = useState(false);
  const [userName, setUserName] = useState("");
  const [userID, setUserID] = useState("");

  useEffect(() => {
    getUser();
  },[]);


  const getUser = async () => {
    const res = await axios.get("https://covidelight.herokuapp.com/")
      const userInfo = res.data[0];
      setUserName(userInfo[0].name);
      setUserID(userInfo[0]._id);
    console.log(userInfo[0]);
    
    if (res.status === 200) {
      setisLoggedIn(true);
    }
  };

  function HandleClick() {
    setBlog(true);
  }
  function handleTourClick(){
    setTour(true);
  }

  return (
  
    <div>
      {!isLoggedIn ? (
        <div>
          {(!blog && !tour) && (
            <div id="start-div">

              <StartPage Click = {HandleClick} tourClick = {handleTourClick}/>
            </div>
          )}
          {blog && <Register />}
          {tour && <Tour/>}
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
