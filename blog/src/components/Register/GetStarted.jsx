import React, { useState } from "react";
import Register from "./Register";

function Start() {
  const [register, setRegister] = useState(false);
  function HandleClick() {
    setRegister(true);
  }
  return (
    <div>
      {!register && (
        <div id="start-div">
          <h1>CoviDelight</h1>
          <h4>Get Started</h4>
          <button onClick={HandleClick}>
            <i className="fas fa-angle-double-right">Start</i>
          </button>
        </div>
      )}
      {register && 
          <Register/>
      }
    </div>
  );
}

export default Start;
