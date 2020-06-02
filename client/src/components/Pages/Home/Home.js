import React, { Fragment } from "react";
import CurrentItems from "../../CurrentItems/CurrentItems";
import "./Home.css";

function Home() {
    return (
        <Fragment>
            <h1 className="home-page__title">Class Tracker</h1>
            <h3 className="home-page__title">The auto-spreadsheet tool</h3>
            <CurrentItems />
        </Fragment>
    );
};

export default Home;