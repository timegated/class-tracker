import React, { Fragment } from "react";
import RegisterCharacter from "../../RegisterCharacter/RegisterCharacter";
import "./Home.css";

function Home() {
    return (
        <Fragment>
            <h1 className="home-page__title">Class Tracker</h1>
            <h3 className="home-page__title">The auto-spreadsheet tool</h3>
            <RegisterCharacter />
        </Fragment>
    );
};

export default Home;