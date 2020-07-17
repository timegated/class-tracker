import React, { useContext, useEffect } from "react";
import CharContext from "../../../context/character/characterContext";

const CurrentDropDown = () => {
  // want to set the state with the data from the async call to my api

  const charContext = useContext(CharContext);
  const { characters, loadCharacters } = charContext;

  // react cannot avoid the first render, hence the null for characters

  useEffect(() => {
    // setting the state can be done here but it seems I'm missing something here or going about it the wrong way
    loadCharacters();
    // eslint-disable-next-line
  }, []);

  if (characters !== null && characters.docs.length === 0) {
    return <h4>No Character's here yet</h4>
  }

  return (
    <div>
      <label className="form-text" htmlFor="Character Name">Select Character</label>
      <select>
        <option></option>
        {characters !== null ? 
          characters.docs.map(character => {
            console.log(character)
            return <option
                key={character._id}
                value={character.name}
              >
                {character.name} - {character.charClass}
              </option>
        }): console.log("error")  
      }
      </select>
    </div>
  );
};

export default CurrentDropDown;
