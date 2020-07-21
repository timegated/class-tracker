import React, { useEffect, useContext } from "react";
import CurrentContext from "../../../context/current/currentContext";
import CharacterContext from "../../../context/character/characterContext";

const ViewItems = () => {
  // viewing items for a singular character, this page's content changes based on which character's view items link is activated

  const currentContext = useContext(CurrentContext);
  const characterContext = useContext(CharacterContext);
  const { loadCurrent, currentItems } = currentContext;
  const { loadCharacters, characters } = characterContext;

  useEffect(() => {
    loadCurrent();
    loadCharacters();
  }, []);
  
  console.log(currentItems);
  console.log(characters);
  return (
    <div className="view-items__main">
      <h1>Viewing Character Items</h1>
    </div>
  );
};

export default ViewItems;
