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
// import AlertState from "./context/alert/AlertState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
    setAuthToken(localStorage.token);  
};

function App() {
    return (
        <AuthState>
            <PlayerState>
                    <Router>
                        <Navbar />
                            <div className="main-content">
                                <Switch>
                                    <PrivateRoute exact path="/" component={Home} />
                                    <PrivateRoute exact path="/currentitems" component={CurrentItems} />
                                    <PrivateRoute exact path="/priority" component={ItemPriority} />
                                    <Route exact path="/about" component={About} />
                                    <Route exact path="/login" component={Login} />
                                    <Route exact path="/signup" component={SignUp} />
                                </Switch>
                            </div>
                    </Router>
            </PlayerState>
        </AuthState>
    );
};

export default App;