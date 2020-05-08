import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Layout/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <h1 className="title">Class Tracker</h1>
            <Home />
        </div>
    );
};

export default App;