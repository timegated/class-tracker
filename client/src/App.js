import React from "react";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Navbar from "./Layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="main-content">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={SignUp} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;