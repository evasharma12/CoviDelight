import React, { useState } from "react";
import "./Blog.css";

function AddBlog(user) {
  const [data, setData] = useState({
    title: "",
    category: "",
    imageURL:
      "https://i.pinimg.com/564x/48/af/a9/48afa93ab92e258869881e24c6da314e.jpg",
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
        <h1 id="add-blog-head">
          <i class="fas fa-pen-fancy"></i> Unleash your writer
        </h1>
        <form id="blog-input" method="post" action="/add-blog">
          <input
            id="addBlog-input"
            type="text"
            value={user.id}
            name="id"
            style={style}
            required
          />
          <input
            id="addBlog-input"
            type="text"
            value={user.name}
            name="name"
            style={style}
            required
          />
          <div id="flex3">
            <div className="flex3-left">
              <input
                id="addBlog-input"
                onChange={handleInput}
                type="text"
                placeholder="Title of your Blog"
                name="title"
                required
              />
              <select
                id="addBlog-input"
                onChange={handleInput}
                type="text"
                placeholder="Choose Category"
                name="category"
              >
                <option>Lifestyle</option>
                <option>Food</option>
                <option>Travel</option>
                <option>Health and fitness</option>

                <option>Technology</option>
                <option>Business</option>
                <option>Parenting</option>
                <option>Hobbies</option>
                <option>Current affairs</option>
              </select>
              <input
                id="addBlog-input"
                onChange={handleInput}
                type="text"
                placeholder="Enter image URL"
                name="imageURL"
              />
            </div>
            <div className="flex3-right">
            <div id="img-div">
            <img id="addBlog-img" src={data.imageURL} alt="blog-img" />
          </div>
            </div>
          </div>

          

          <textarea
            id="addBlog-input"
            class="add-content"
            onChange={handleInput}
            type="text"
            placeholder="Write your content here"
            name="content"
            required
          />
          <div id="submit-blog-div">
            <button id="submit-blog">Publish</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddBlog;
