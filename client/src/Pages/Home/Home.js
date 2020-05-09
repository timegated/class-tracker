import React, { Fragment } from "react";
import CurrentItems from "../../components/CurrentItems/CurrentItems";
import "./Home.css";

function Home() {
    return (
        <Fragment>
            <h3 className="home-page__title">Class Tracker</h3>
            <p className="home-page__title">The anti-spreadsheet tool</p>
            <CurrentItems />
        </Fragment>
    );
};

export default Home;