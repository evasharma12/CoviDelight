import React, { useState,useEffect } from "react";
import AddBlog from "./AddBlog";
import AllBlogs from "./AllBlogs";
import "./Blog.css";
import axios from "axios";

//Main page handling Blogs
//         BLOG(gets all user info and the blogs)
//            /                             \
//           /                               \
//          Add Blog                        All Blogs
//(gets user info to save with the blog)  (gets all the blogs to display) 

function Blog(user) {
  const [createBlog, setCreateBlog] = useState(false);
  const [blogs, setBlogs] = useState();
  let res;

  const getBlogs = async()=>{
    res = await axios.get("http://localhost:8000/blog");
    const arr = res.data;
    // const blogs = arr[arr.length-1];
    setBlogs(arr[arr.length-1]);
    console.log(blogs);
  }

  useEffect(()=>{
    getBlogs();
  }, [res]);


  function handleAddBlog(){
    setCreateBlog(true);
  }
  return(
    <div>
      {createBlog ? <AddBlog id = {user.id} name = {user.name}/>
      : <AllBlogs click = {handleAddBlog}/>}
    </div>
  );
}
export default Blog;
