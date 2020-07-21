import React, { useContext, useEffect } from "react";
// import CurrentDropDown from "./CurrentDropDown";
import TierOne from "./TierOne";
import TierTwo from "./TierTwo";
import AQ from "./AQ";
// import CurrentContext from "../../../context/current/currentContext"
import CharContext from "../../../context/character/characterContext";

// snagged
const CurrentItems = () => {
    const charContext = useContext(CharContext);
    const { characters, loadCharacters } = charContext;

    useEffect(() => {
        loadCharacters();
    }, [])

    const onChange = (e) => {
        console.log("onChange: fired")
    };
    
    const onSubmit = (e) => {
        console.log(e.target)
        e.preventDefault();
    };
    console.log("From charContext: ", characters);
    if (characters !== null && characters.docs.length === 0) {
        return <h4>No Character's here yet</h4>
    }
    return (
        <div className="form-container">
            <h1>Currently Equipped Items</h1>
            <form onSubmit={onSubmit}>
                <label className="form-text" htmlFor="Character Name">Select Character</label>
                <select>
                    <option></option>
                    {characters !== null ?
                        characters.docs.map(character => {
                            return <option
                                key={character._id}
                                value={character.name}
                                onChange={onChange}
                            >
                                {character.name} - {character.charClass}
                            </option>
                        }) : console.log("error")
                    }
                </select>
                {/* <label className="form-text" htmlFor="Raid Tier">Raid Tier</label> */}
                {/* <select value={charInfo} onChange={onChange}>
                    <option value=""></option>
                    <option value={raidOne}>Molten Core</option>
                    <option value={raidTwo}>Blackwing Lair</option>
                    <option value={raidThree}>Temple of Ahn'Qiraj</option>
                </select> */}
                {/* {charInfo === "Molten Core" ? <TierOne /> : console.log("nothing here yet")}
                {charInfo === "Blackwing Lair" ? <TierTwo /> : console.log("nothing here yet")}
                {charInfo === "Temple of Ahn'Qiraj" ? <AQ /> : console.log("nothing here yet")} */}
                <button type="submit" className="btn" style={{margin: "1rem auto", display:"block", width:"100%"}}>Submit</button>
            </form>
        </div>
    );
};

export default CurrentItems;