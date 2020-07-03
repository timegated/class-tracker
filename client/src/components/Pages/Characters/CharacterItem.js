import React, { useContext } from "react";
import CharacterContext from "../../../context/character/characterContext";

const CharacterItem = ({ character }) => {
    const characterContext = useContext(CharacterContext);
    const { deleteCharacter } = characterContext;
    const { _id, characterName, characterClass, guildName } = character;

    const onDelete = () => {
        deleteCharacter(_id);
    };


    return (
    <div className="card-container">
        <div className="card">
            <h3>
                {characterName}
            </h3>
            <h3>
                {characterClass}
            </h3>
            <h3>
                {guildName}
                </h3>
                <p>
                    <button onClick={onDelete} className="btn">Delete</button>
                </p>
        </div>
    </div>
        
    );
};

export default CharacterItem;
