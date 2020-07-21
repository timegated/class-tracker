import React, { useContext } from "react";
import CharacterContext from "../../../context/character/characterContext";
import { Link } from "react-router-dom";

const CharInfo = ({ character }) => {
    const characterContext = useContext(CharacterContext);
    const { deleteCharacter } = characterContext;
    const { _id, name, charClass, guild } = character;

    const onDelete = () => {
        deleteCharacter(_id);
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
                <Link to="/viewitems" className="btn">View Items</Link>
                <Link onClick={onPrio} className="btn">View Prio List</Link>
                <Link onClick={onDelete} className="btn">Delete</Link>
                </p>
               
                    
                
        </div>
        
    );
};

export default CharInfo;
