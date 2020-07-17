import React, { useContext } from "react";
import CharacterContext from "../../../context/character/characterContext";

const CharInfo = ({ character }) => {
    const characterContext = useContext(CharacterContext);
    const { deleteCharacter } = characterContext;
    const { _id, name, charClass, guild } = character;

    const onDelete = () => {
        deleteCharacter(_id);
    };

    const onView = () => {

    };
    
    const onPrio = () => {

    };

    return (
        <div className="card">
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
                <button onClick={onView} className="btn">View Items</button>
                <button onClick={onPrio} className="btn">View Prio List</button>
                <button onClick={onDelete} className="btn">Delete</button>
                </p>
               
                    
                
        </div>
        
    );
};

export default CharInfo;
