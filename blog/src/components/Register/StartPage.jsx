import React from "react";
import image from "../../images/lights.jpg";
import "./Start.css";

function StartPage(props) {
  return (
    <div>
      <div id="navbar">
        <div id="left-nav">
          <ul>
            <li id="logo">
              <p><i class="fas fa-pills"></i>       CoviDelight</p>
            </li>
            <li className = "p">
              <a href="">Features</a>
            </li>
            <li className = "p">
              <a href="">Motivation</a>
            </li>
            <li className = "p">
              <a href="">Reviews</a>
            </li>
            <li className = "p">
              <a href="">Contact Us</a>
            </li>

            <div id="login" >
              <button id="login-button" onClick={props.Click}>
                Login
              </button>
            </div>
          </ul>
        </div>
      </div>

      <div className="flex">
        <div className="left">
            <div>
            <h1 id="tag">Overcome Covid Trauma</h1>
          <br />

          <p id="tag-parah">
            A platform which helps you to overcome Covid Trauma cause by lack of
            interaction with people and the outer world.
          </p>
            </div>

          <img id = "left-img" src = {image} alt = "image"/>
        </div>
        <div className="right">
            
        </div>
      </div>
    </div>
  );
}

export default StartPage;
