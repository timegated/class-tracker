import React from "react";

const Home = () => {
    const homeStyle = {
        marginTop: "10rem",
        border: "1px solid #efefef",
        boxShadow: "1px 1px 1px 1px #efefef",
        padding: "10rem"
    }
    const fontStyle = {
        color: "#efefef",
        textAlign: "center",
    }
    const infoStyle = {
        color: "#efefef",
        textAlign: "center",
        fontSize: "24px",
    }
    return (
        <div style={homeStyle}>
            <h1 style={fontStyle}>Welcome to the app</h1>
            <p style={infoStyle}>This is a tool designed to help players organize what items they currently have in game without resorting to manually creating a google spread sheet</p>
        </div>
    );
};

export default Home;