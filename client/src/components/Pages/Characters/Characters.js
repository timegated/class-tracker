import React, { useEffect, useContext } from "react";
import CharacterContext from "../../../context/character/characterContext";
import CharInfo from "./CharInfo";


const Characters = () => {
    const characterContext = useContext(CharacterContext);
    
    const { characters, loadCharacters } = characterContext;

    useEffect(() => {
        loadCharacters();
        // es-lint-disable-next-line
    }, []);

    console.log(characters)
    if (characters !== null && characters.docs.length === 0) {
        return <h4 className="add__title">Add a Character</h4>
    };
  
    return (
        <>
            {characters !== null ? (
                <div className="card-container">
                    {characters.docs.map(character => (
                        <CharInfo
                            key={character._id}
                            character={character}
                        />
                ))}
                </div>
            ) : <h4 className="add__title">Add a Character</h4>}
        </>
    );
};

export default Characters;
