import React, { useState } from "react";

import "./Blog.css";
import BlogCard from "./BlogCard";
import ViewBlog from "./ViewBlog";

//Recieves all the blogs as props
//Sends request to parent comp on add blog button click
//filters props on the basis of user id if my blogs requested
//Renders a new component if clicked on read more which filters
//blog on the basis on blog id.

function AllBlogs(props) {
  const [viewBlog, setViewBlog] = useState(false);
  const [blogToView, setBlogToView] = useState();

  function handleViewBlog(blogID){
    props.dbBlogs.forEach((blog)=>{
      if(blog._id === blogID){
        setBlogToView(blog);
        setViewBlog(true);
      }
    });
    
  }

  function handleNotViewBlog(){
    setViewBlog(false);
  }

  return (
    <div>
      {viewBlog ? <ViewBlog Blog = {blogToView} back = {handleNotViewBlog}/> : 
      
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
                <button id="add-blog-button" onClick={props.addBlog}>
                  Add Blog
                </button>
              </li>
              <li className="p">
              <button id="add-blog-button" onClick={props.myBlogs}>
                  My Blogs
                </button>
              </li>
              {/* <li className="p">
                <a href="">360° Tour</a>
              </li> */}

              <div id="login">
                <form method="post" action="/logout">
                  <button id="login-button">Logout</button>
                </form>
              </div>
            </ul>
          </div>
        </div>
        <div id = "blog-cards-div">
          {typeof props.dbBlogs !== "undefined" &&
            props.dbBlogs.map((blog, index) => {
              return (
                <BlogCard
                  key={index}
                  title={blog.title}
                  content={blog.content}
                  category={blog.category}
                  image = {blog.imageURL}
                  _id = {blog._id}
                  click = {handleViewBlog}
                />
              );
            })}
        </div>
      </div>}
    </div>
  );
}
export default AllBlogs;
