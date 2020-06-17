import React, { useContext, useEffect, Fragment } from "react";
import RegisterCharacter from "../../RegisterCharacter/RegisterCharacter";
import AuthContext from "../../../context/auth/authContext";
import "./Home.css";

function Home() {
    const authContext = useContext(AuthContext);
    
    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <h1 className="home-page__title">Class Tracker</h1>
            <h3 className="home-page__title">The auto-spreadsheet tool</h3>
            <RegisterCharacter />
        </Fragment>
    );
};

export default Home;