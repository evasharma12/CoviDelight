import React, { useState } from "react";
import "./Blog.css";

function AddBlog(user) {
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

  const style = {
    display: "none",
  };

  return (
    <div id="add-blog">
      <div id="create-blog">
        <h1 id = "add-blog-head"><i class="fas fa-pen-fancy"></i>    Unleash your writer</h1>
        <form id="blog-input" method="post" action="/add-blog">
          <input id = "addBlog-input" type="text" value={user.id} name="id"  style = {style} required/>
          <input id = "addBlog-input" type="text" value={user.name} name="name" style = {style} required/>
          <input
          id = "addBlog-input"
            onChange={handleInput}
            type="text"
            placeholder="Title of your Blog"
            name="title"
            required
          />
          <select
          id = "addBlog-input"
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
          id = "addBlog-input"
            onChange={handleInput}
            type="text"
            placeholder="Enter image URL"
            name="imageURL"
          />
          <div id = "img-div">
          <img id = "addBlog-img" src={data.imageURL} alt="blog-img" />
            </div>
          
          <textarea
          id = "addBlog-input"
          class = "add-content"
            onChange={handleInput}
            type="text"
            placeholder="Write your content here"
            name="content"
            required
          />
          <div id = "submit-blog-div"><button id = "submit-blog">Submit</button></div>
          
        </form>
      </div>
    </div>
  );
}
export default AddBlog;
