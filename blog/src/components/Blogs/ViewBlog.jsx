import React from "react";

function ViewBlog(blogs){
    function renderBlog(){

    }
    return(
        <div>
            <p>{blogs.Blogs[0].title}</p>
            <button onClick = {blogs.back}>Go back</button>
        </div>
    )
}

export default ViewBlog;