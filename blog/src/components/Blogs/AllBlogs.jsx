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

  // function handleReadMore() {
  //   // props.dbBlogs.map((blog,index)=>{

  //   //   if(blog._id === blogid){

  //   //     <div>
  //   //       <ViewBlog/>
  //   //     </div>
  //   //   }
  //   // })
  //   // console.log(event);
  //   handleViewBlog();
    
  // }
  // function handleViewBlog(){
  //   setViewBlog(!viewBlog);
  // }


  return (
    <div>
      {viewBlog ? <ViewBlog Blogs = {props.dbBlogs} /> : 
      
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
                <button id="add-blog-button" onClick={props.click}>
                  Add Blog
                </button>
              </li>
              <li className="p">
              <button id="add-blog-button" onClick={props.click}>
                  My Blogs
                </button>
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
                  // click = {handleReadMore}
                />
              );
            })}
        </div>
      </div>}
    </div>
  );
}
export default AllBlogs;
