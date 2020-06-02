import React, { Fragment } from "react";
import Registration from "../../Registration/Registration";
import "./Home.css";

function Home() {
    return (
        <Fragment>
            <h1 className="home-page__title">Class Tracker</h1>
            <h3 className="home-page__title">The auto-spreadsheet tool</h3>
            <Registration />
        </Fragment>
    );
};

export default Home;