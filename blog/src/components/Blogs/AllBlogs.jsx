import React, { useState } from "react";

import "./Blog.css";
import BlogCard from "./BlogCard";


//Recieves all the blogs as props
//Sends request to parent comp on add blog button click
//filters props on the basis of user id if my blogs requested
//Renders a new component if clicked on read more which filters
//blog on the basis on blog id.

function AllBlogs(props) {
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
              <button id="add-blog-button" onClick={props.click}>
                Add Blog
              </button>
            </li>
            <li className="p">
              <a href="">My Blogs</a>
            </li>
            <li className="p">
              <a href="">360° Tour</a>
            </li>

            <div id="login">
              <form method="post" action="/logout">
                <button id="login-button">Logout</button>
              </form>
            </div>
          </ul>
        </div>
      </div>

      <BlogCard />
    </div>
  );
}
export default AllBlogs;
