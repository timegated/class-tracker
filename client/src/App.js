import React from "react";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Navbar from "./components/Layout/Navbar";
import CurrentItems from "./components/Items/CurrentItems/CurrentItems";
import ItemPriority from "./components/Items/ItemPriority/ItemPriority";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import PrivateRoute from "./components/Routing/PrivateRoute";
import PlayerState from "./context/player/PlayerState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <AuthState>
            <PlayerState>
                <AlertState>
                <Router>
                    <div className="main-content">
                        <Navbar />
                        <Switch>
                            <PrivateRoute exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/currentitems" component={CurrentItems} />
                            <Route exact path="/priority" component={ItemPriority} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/signup" component={SignUp} />
                        </Switch>
                    </div>
                    </Router>
                </AlertState>
            </PlayerState>
        </AuthState>
    );
};

export default App;