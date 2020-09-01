
import React from "react";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Navbar from "./components/Layout/Navbar/Navbar";
import CurrentItems from "./components/Items/CurrentItems/CurrentItems";
import Characters from "./components/Pages/Characters/Characters";
import ItemPriority from "./components/Items/ItemPriority/ItemPriority";
import ViewItems from "./components/Items/ViewItems/ViewItems";
import ViewPrio from "./components/Items/ViewPrio/ViewPrio";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import PrivateRoute from "./components/Routing/PrivateRoute";
import ItemState from "./context/items/ItemState";
import CurrentState from "./context/current/CurrentState";
import CharacterState from "./context/character/CharacterState";
import AuthState from "./context/auth/AuthState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <AuthState>
      <CharacterState>
        <CurrentState>
          <ItemState>
          <Router>
            <Navbar />
            <div className="main-content">
              <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/currentitems" component={CurrentItems} />
                <PrivateRoute exact path="/priority" component={ItemPriority} />
                <PrivateRoute exact path="/characters" component={Characters} />
                <PrivateRoute exact path="/viewitems" component={ViewItems} />
                <PrivateRoute exact path="/viewprio" component={ViewPrio} />
              </Switch>
            </div>
            </Router>
          </ItemState>
        </CurrentState>
      </CharacterState>
    </AuthState>
  );
};

export default App;