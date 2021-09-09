import React from "react";
import Start from "./components/Register/GetStarted";
import "./App.css";
function App() {
  return (
    <div className="App">
        <Start/>
        <form action = "/blog" method = "post">
          <button type = "submit">Submit</button>
        </form>

    </div>
  );
}

export default App;
