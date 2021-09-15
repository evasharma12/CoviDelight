import React, { useState } from "react";
import "./Blog.css";


function AddBlog(user) {
  const [addBlog, setAddBlog] = useState(true);

  const [data, setData] = useState({
    
    title: "",
    category: "",
    imageURL:
      "https://i.pinimg.com/564x/e9/dd/9e/e9dd9e2ac07e10dfce2165fd161bcdec.jpg",
    content: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {}

  
  const style = {
    display: "none",
  }

  return (
    <div id="blog">
      {!addBlog ? (
        <div id="display-blogs"></div>
      ) : (
        <div id="create-blog">
          <form id="blog-input" method = "post" action = "/add-blog">
            <input type = "text" value = {user.id} name = "id" style = {style}/>
            <input type = "text" value = {user.name} name = "name" style = {style}/>
            <input
              onChange={handleInput}
              type="text"
              placeholder="Title of your Blog"
              name="title"
            />
            <select
              onChange={handleInput}
              type="text"
              placeholder="Choose Category"
              name="category"
            >
              <option>Food</option>
              <option>Travel</option>
              <option>Health and fitness</option>
              <option>Lifestyle</option>
              <option>Technology</option>
              <option>Business</option>
              <option>Parenting</option>
              <option>Hobbies</option>
              <option>Current affairs</option>
            </select>
            <input
              onChange={handleInput}
              type="text"
              placeholder="Enter image URL"
              name="imageURL"
            />
            <img src={data.imageURL} alt="blog-img" />
            <input
              onChange={handleInput}
              type="text"
              placeholder="Write your content here"
              name="content"
            />
            <button onClick={handleSubmit}>Submit</button>
          </form>
          <form method="post" action="/logout">
            <button type="submit">Logout</button>
          </form>
        </div>
      )}
    </div>
  );
}
export default AddBlog;