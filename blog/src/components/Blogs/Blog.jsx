import React from "react";

function Blog(){
    return(
        <div>
            This is Blog Page;
            <form method = "post" action = "/logout">
                <button type = "submit">Logout</button>
            </form>
        </div>
    )
        
}
export default Blog;