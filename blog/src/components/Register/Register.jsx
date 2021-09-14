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
      <h1><i class="fas fa-pills"/>        CoviDelight</h1>
      <div className="flex-container2">
        <div class="flex2 left-div">
          <h2 id="left-heading">Covi Delight</h2>
          <p id="left-parah">{isregistered ? "Sign In to Continue...": "Register to Continue..."}</p>
        </div>

        <div className="flex2 right-div">
          <h2>{isregistered ? "Sign In" : "Register Here"}</h2>
          <div id="right-inner-div">
            <form method="post" action="/login" id="login-form">
              {!isregistered && (
                <input
                  className="input"
                  placeholder="Full Name"

                  required
                  onChange={handleInput}
                  type="text"
                  id="name"
                  value={userInfo.name}
                  name="name"
                ></input>
              )}
              <input
                className="input"
                placeholder="Email"
                required
                onChange={handleInput}
                type="email"
                id="email"
                value={userInfo.email}
                name="email"
              ></input>
              <input
                className="input"
                placeholder="Password"
                required
                onChange={handleInput}
                type="password"
                id="pass"
                value={userInfo.password}
                name="password"
              ></input>
              <button className = "button" type="submit" onChange={useEffect}>
                {isregistered ? "Sign In" : "Register Here"}
              </button>
            </form>
            <div id = "right-align-div">
            <button id = "right-parah" onClick={handleChange}>
              {isregistered ? "Register" : "Sign In"}
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
