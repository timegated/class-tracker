import React from "react";
import "./CurrentItems.css";

const CurrentItems = () => {
    return (
        <form className="current-items__form">
            <label className="current-items__label" htmlFor="Character Name">Character</label>
            <input className="current-items__input" type="text" name="character"/>
            <label className="current-items__label" htmlFor="Class">Class</label>
            <input className="current-items__input" type="text" name="class"/>
            <label className="current-items__label" htmlFor="Guild Rank">Guild Rank</label>
            <input className="current-items__input" type="text" name="guildrank"/>
        </form>
    );
};

export default CurrentItems;
