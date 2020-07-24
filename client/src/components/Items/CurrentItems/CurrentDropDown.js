import React from "react";

const CurrentDropDown = ({ characters }) => {

  if (characters !== null && characters.docs.length === 0) {
    return <h4>No Character's here yet</h4>
  }
  console.log(characters)
  return (
    <>
      <label className="form-text" htmlFor="Character Name">Select Character</label>
      <select>
        <option></option>
        {characters !== null ?
          characters.docs.map(character => {
            return <option
              key={character._id}
              value={character.name}
            >
              {character.name} - {character.charClass}
            </option>
          }) : console.log("CurrentDD: nothing here yet")
        }
      </select>
    </>
  );
};

export default CurrentDropDown;
