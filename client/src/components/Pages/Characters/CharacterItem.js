import React, { useContext } from "react";
// import CharacterContext from "../../../context/character/characterContext";

const CharacterItem = ({ character }) => {
    // const characterContext = useContext(CharacterContext);

    const { characterName, characterClass, guildName } = character;

    return (
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
        </div>
    );
};

export default CharacterItem;
