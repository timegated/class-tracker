import React from "react";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Navbar from "./components/Layout/Navbar";
import CurrentItems from "./components/Items/CurrentItems/CurrentItems";
import ItemPriority from "./components/Items/ItemPriority/ItemPriority";
// import Login from "./components/Auth/Login";
// import SignUp from "./components/Auth/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="main-content">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/currentitems" exact component={CurrentItems} />
                    <Route path="/priority" exact component={ItemPriority} />
                    {/* <Route path="/login" exact component={Login} /> */}
                    {/* <Route path="/signup" exact component={SignUp} /> */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;