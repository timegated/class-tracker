import React, { useContext } from "react";
import CharacterContext from "../../../context/character/characterContext";
import { Link } from "react-router-dom";
import classes from "./Characters.module.css";

const CharInfo = ({ character }) => {
    // how do i grab the individual character _id from the viewitem/viewprio links?
    
    const characterContext = useContext(CharacterContext);
    const { deleteCharacter } = characterContext;
    const { _id, name, charClass, guild } = character;

    const onDelete = () => {
        deleteCharacter(_id);
    };
    console.log(_id)
    return (
        <div className={classes.card}>
            <div className={classes.cardImg}>
                <img src="https://vignette.wikia.nocookie.net/wowwiki/images/0/09/Patchnotes-icon-hunter.gif/revision/latest?cb=20130325175454" alt="hunter icon"/>
            </div>
            <h3>
                {name}
            </h3>
            <h3>
                {charClass}
            </h3>
            <h3>
                {guild}
                </h3>
            <p>
                <Link to="/viewitems" className="btn">View Items</Link>
                <Link to="/viewprio" className="btn">View Prio List</Link>
                <button onClick={onDelete} className="btn">Delete</button>
                </p>
               
                    
                
        </div>
        
    );
};

export default CharInfo;
