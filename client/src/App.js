import React from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Layout/Navbar";

function App() {
    return (
        <div className="main-content">
            <Navbar />
            <Home />
        </div>
    );
};

export default App;