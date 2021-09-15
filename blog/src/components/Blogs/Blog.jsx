import React, { useState } from "react";
import AddBlog from "./AddBlog";
import AllBlogs from "./AllBlogs";
import "./Blog.css";
import axios from "axios";


function Blog(user) {
  const [createBlog, setCreateBlog] = useState(false);
  return(
    <div>
      {createBlog ? <AddBlog id = {user.id} name = {user.name}/>
      : <AllBlogs/>}
    </div>
  );
}
export default Blog;
