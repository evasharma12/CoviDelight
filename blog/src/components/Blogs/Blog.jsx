import React, {useState} from "react";
import "./Blog.css";
function Blog(){

    const [data, setData] = useState({
        title: "",
        imageURL: "https://i.pinimg.com/564x/e9/dd/9e/e9dd9e2ac07e10dfce2165fd161bcdec.jpg",
        content: "",
    });

    function handleInput(event){
        const{name, value} = event.target;
        setData((prevValue)=>{
            return{
                ...prevValue,
                [name]: value,
            }
        })
    };

    function handleSubmit(event){
        
    }
    return(
        <div id = "blog">
            This is Blog Page;
            <form  id = "blog-input">
                <input onChange = {handleInput} type = "text" placeholder = "Title of your Blog" name = "title"/>
                <input onChange = {handleInput} type = "text" placeholder = "Enter image URL" name = "imageURL"/>
                <img src = {data.imageURL} alt = "blog-img"/>
                <input onChange = {handleInput} type = "text" placeholder = "Write your content here" name = "content"/>
                <button onClick = {handleSubmit} >Submit</button>
            </form>
            <form method = "post" action = "/logout"> 
            <button type = "submit" >Logout</button>
            </form>
        </div>
    )
        
}
export default Blog;