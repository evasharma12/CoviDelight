import React from "react";
import "./Blog.css";

function BlogCard(blog) {
  function handleClick(){
    console.log("View Blog");
  }
  return (
    <div id="blog-card" class = "flex-4" onClick = {handleClick}>
      {/* <div id="blog-card-upper-div">
        <h2 id="blog-head">{blog.title}</h2>
        <p id="blog-cat">— {blog.category}</p>
      </div>

      <div id="blog-text">
        <p>
            {blog.content}
        </p>
      </div>
      <div id="read-more">
        <button>
          <p>Read More</p>
        </button>
      </div> */}

      <div id = "flex-4-left">
        <h2 id="blog-head">{blog.title}</h2>
        <p id="blog-cat">— {blog.category}</p>
        <div id="blog-text">
        <p>
            {blog.content}
        </p>
      </div>
      </div>
      <div id = "flex-4-right">
        <img id = "blog-img"src = {blog.image} alt = "image"></img>
      </div>
      
    </div>
  );
}
export default BlogCard;
