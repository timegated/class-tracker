import React, { useState, useContext, useEffect } from "react";
import CurrentDropDown from "./CurrentDropDown";
import TierOne from "./RaidTiers/TierOne";
import TierTwo from "./RaidTiers/TierTwo";
import AQ from "./RaidTiers/AQ";
// import CurrentContext from "../../../context/current/currentContext"
import CharContext from "../../../context/character/characterContext";

// snagged
const CurrentItems = () => {
    const charContext = useContext(CharContext);
    const { characters, loadCharacters } = charContext;
    const [raidTier, setRaidTier] = useState({
        raidOne: "Molten Core",
        raidTwo: "Blackwing Lair",
        raidThree: "Temple of Ahn'Qiraj"
    });

    useEffect(() => {
        loadCharacters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { raidOne, raidTwo, raidThree } = raidTier;

    const onChange = (e) => {
        setRaidTier(e.target.value);
    };
    console.log(characters);
    return (
        // select raid tier first before all else
        <div className="form-container">
            <h1>Current Items</h1>
            <form>
                <CurrentDropDown characters={characters}/>
                <label className="form-text" htmlFor="Raid Tier">Raid Tier</label>
                <select value={raidTier} onChange={onChange}>
                    <option value=""></option>
                    <option value={raidOne}>Molten Core</option>
                    <option value={raidTwo}>Blackwing Lair</option>
                    <option value={raidThree}>Temple of Ahn'Qiraj</option>
                </select>
                {raidTier === "Molten Core" ? <TierOne /> : console.log("nothing here yet")}
                {raidTier === "Blackwing Lair" ? <TierTwo /> : console.log("nothing here yet")}
                {raidTier === "Temple of Ahn'Qiraj" ? <AQ /> : console.log("nothing here yet")}
                <button type="submit" className="btn" style={{margin: "1rem auto", display:"block", width:"100%"}}>Submit</button>
            </form>
        </div>
    );
};

export default CurrentItems;