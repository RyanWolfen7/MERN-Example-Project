import React from "react";
import "./styles/App.css"
import NavBar from "./components/Navbar";
import TaskTracker from "./pages/TaskTracker";

const App = ({ children }) => {

  return (
      <div className="main">
        <NavBar />
        <TaskTracker />
        {children}
      </div>
    )
}

export default App
