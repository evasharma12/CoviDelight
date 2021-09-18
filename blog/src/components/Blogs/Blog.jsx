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
  const [myBlogs, setMyBlogs] = useState(false);
  const [myBlogsArr, setMyBlogsArr] = useState([]);
  let res;

  const getBlogs = async()=>{
    res = await axios.get("http://localhost:8000/blog");
    const arr = res.data[1];
    setBlogs(arr);
    console.log(arr);
  }

  useEffect(()=>{
    getBlogs();
  },[]);


  function handleAddBlog(){
    setCreateBlog(true);
  }
  function handleMyBlogs(){
    console.log("clicked");
    blogs.forEach((blog)=>{
      if(blog.id === user.id){
        console.log(blog.title);
        myBlogsArr.push(blog);
      }

    });
    setMyBlogs(true);
  }
  return(
    <div>
      {createBlog ? <AddBlog id = {user.id} name = {user.name}/>
      : <AllBlogs click = {handleAddBlog} dbBlogs = {!myBlogs ? blogs : myBlogsArr} click = {handleMyBlogs}/>}
    </div>
  );
}
export default Blog;
