import React, { useEffect, useContext } from "react";
import PlayerContext from "../../../context/character/characterContext";

const Characters = () => {
    const playerContext = useContext(PlayerContext);
    
    const { characters, loadCharacters } = playerContext;

    useEffect(() => {
        loadCharacters();
        // es-lint-disable-next-line
    }, []);
    console.log(characters)
    return (
        <div>
            <h1>Character's Displayed Here</h1>
        </div>
    );
};

export default Characters;
