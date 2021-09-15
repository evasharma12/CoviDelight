import React, { useState } from "react";

import "./Blog.css";
import axios from "axios";

function AllBlogs() {
  return (
    <div id="blogs">
      <div id="navbar">
        <div id="left-nav">
          <ul>
            <li id="logo">
              <p>
                <i class="fas fa-pills"></i> CoviDelight
              </p>
            </li>
            <li className="p">
              <a href="">Categories</a>
            </li>
            <li className="p">
              <button><a href="#" id = "add-blog-link">Add Blog</a></button>
            </li>
            <li className="p">
              <a href="">360° Tour</a>
            </li>


            <div id="login">
                <form method = "post" action = "/logout"><button id="login-button">
                Logout
              </button></form>
              
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default AllBlogs;
