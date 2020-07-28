import React, { useEffect, useContext } from "react";
import CharacterContext from "../../../context/character/characterContext";
import CharInfo from "./CharInfo";
import classes from "./Characters.module.css";

const Characters = () => {
    const characterContext = useContext(CharacterContext);
    
    const { characters, loadCharacters } = characterContext;

    useEffect(() => {
        loadCharacters();
        // es-lint-disable-next-line
    }, []);

    if (characters !== null && characters.docs.length === 0) {
        return <h1 className={classes.addTitle}>Add a Character</h1>
    };
  
    return (
       <>
            {characters !== null ? (
                <div className={classes.cardContainer}>
                    {characters.docs.map(character => (
                        <CharInfo
                            key={character._id}
                            character={character}
                        />
                ))}
                </div>
            ) : <h4 className={classes.addTitle}>Add a Character</h4>}
      </>
    );
};

export default Characters;
