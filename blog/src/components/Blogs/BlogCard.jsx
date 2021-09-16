import React from "react";
import "./Blog.css";

function BlogCard(blog) {
  return (
    <div id="blog-card">
      <div id="blog-card-upper-div">
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
      </div>
    </div>
  );
}
export default BlogCard;
