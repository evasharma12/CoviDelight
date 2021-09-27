import React from "react";
import "./Blog.css";
function ViewBlog(blog) {
  return (
    <div id = "view-blog-page">
      <div id="navbar">
        <div id="left-nav">
          <ul>
            <li id="logo">
              <p>
                <i class="fas fa-pills"></i> CoviDelight
              </p>
            </li>

            <div id="login">
              <button id="login-button" onClick={blog.back}>
                Go Back
              </button>
            </div>
          </ul>
        </div>
      </div>
      <div  id="view-blog">
      <h1 id="view-blog-head">{blog.Blog.title}</h1>
      <p id="view-blog-name">— {blog.Blog.name}</p>

      <div id="view-blog-img-div">
        <img id="view-blog-img" src={blog.Blog.imageURL} alt="image"></img>
      </div>
      <p id="view-blog-content">{blog.Blog.content}</p>
      </div>
      <div id = "footer">
      <button id="login-button" onClick={blog.back}>
                Go Back
              </button>
      </div>

      
    </div>
  );
}

export default ViewBlog;
