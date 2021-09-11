import React, { useState, useEffect } from "react";
import axios from "axios";
import Register from "./Register";
import Blog from "../Blogs/Blog";


function Start() {
  const [register, setRegister] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    getUser();
  });

  const getUser = async () => {
    const res = await axios.get("http://localhost:8000/blog");
    console.log(res);
    if (res.status === 200) {
      setisLoggedIn(true);
      console.log("done");
    }
  };

  function HandleClick() {
    setRegister(true);
  }

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          {!register && (
            <div id="start-div">
              
              <div>
                <h1>Covi Delight</h1>
                
                <button onClick={HandleClick}>
                <h4>Get Started</h4>
                </button>
              </div>
            </div>
          )}
          {register && <Register />}
        </div>
      ) : (
        <div>
          <Blog />
        </div>
      )}
    </div>
  );
}

export default Start;
