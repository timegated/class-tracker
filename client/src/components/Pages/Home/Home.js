import React from "react";
import Characters from "../Characters/Characters";
import RegisterCharacter from '../../RegisterCharacter/RegisterCharacter';
import classes from "./Home.module.css";

const Home = () => {
    return (
        <div className={classes.homeContent}>
            <RegisterCharacter /> 
            <Characters />
        </div>
    );
};

export default Home;