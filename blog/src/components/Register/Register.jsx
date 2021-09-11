import React, { useState, useEffect } from "react";
import "./registerstyle.css";
function Register() {
  const [isregistered, SetIsRegistered] = useState(true);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setUserInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleChange() {
    SetIsRegistered(!isregistered);
  }
  return (
    <div id="register">
      <div className="flex-container">
        <div class="flex left-div" width="50%">
          <h2 id="left-heading">Covi Delight</h2>
          <p id="left-parah">Sign up to Continue ...</p>
        </div>
      

      <div className="flex right-div">
        {/* <h2 style = "text-align: center;">{isregistered ? "Sign In" : "Register Here"}</h2> */}
        <form method="post" action="/login" id="login-form">
          {!isregistered && (
            <label htmlFor="name">
              Full Name:
              <input
                required
                onChange={handleInput}
                type="text"
                id="name"
                value={userInfo.name}
                name="name"
              ></input>
            </label>
          )}
          <label htmlFor="email">
            Email:
            <input
              required
              onChange={handleInput}
              type="email"
              id="email"
              value={userInfo.email}
              name="email"
            ></input>{" "}
          </label>
          <label htmlFor="pass">
            Password:
            <input
              required
              onChange={handleInput}
              type="password"
              id="pass"
              value={userInfo.password}
              name="password"
            ></input>{" "}
          </label>
          <button type="submit" onChange={useEffect}>
            {isregistered ? "Sign In" : "Register Here"}
          </button>
        </form>
        <button onClick={handleChange}>
          {isregistered ? "Register" : "Sign In"}
        </button>
      </div>
      </div>
    </div>
  );
}

export default Register;
