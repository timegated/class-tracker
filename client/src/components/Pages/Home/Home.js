import React, { useContext, useEffect } from "react";
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
        <>
            <RegisterCharacter />
        </>
    );
};

export default Home;