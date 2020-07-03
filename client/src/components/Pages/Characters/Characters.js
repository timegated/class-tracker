import React, { useEffect, useContext } from "react";
import CharacterContext from "../../../context/character/characterContext";
import CharacterItem from "./CharacterItem";


const Characters = () => {
    const characterContext = useContext(CharacterContext);
    
    const { characters, loadCharacters } = characterContext;

    useEffect(() => {
        loadCharacters();
        // es-lint-disable-next-line
    }, []);

    console.log(characters)
    if (characters !== null && characters.length === 0) {
        return <h4>Add a Character</h4>
    };

    return (
        <>
            {characters !== null ? (
                <div className="card-container">
                    {characters.map(character => (
                        <CharacterItem
                            key={character._id}
                            character={character}
                        />
                ))}
                </div>
            ) : (console.log('error'))}
        </>
    );
};

export default Characters;
