import React, { useState, useContext, useEffect } from "react";
import CurrentDropDown from "./CurrentDropDown";
import TierOne from "./RaidTiers/TierOne";
import TierTwo from "./RaidTiers/TierTwo";
import AQ from "./RaidTiers/AQ";
import CharContext from "../../../context/character/characterContext";

const CurrentItems = () => {
    const charContext = useContext(CharContext);
    const { characters, loadCharacters } = charContext;
    const [raidTier, setRaidTier] = useState({
        raidOne: "Molten Core",
        raidTwo: "Blackwing Lair",
        raidThree: "Temple of Ahn'Qiraj"
    });

    const [aqSet, setAq] = useState({
        head: "",
        legs: "",
        feet: "",
        chest: "",
        shoulder: "",
        hands: ""
    });
    
    const [tierOne, setTierOne] = useState({
        head: "",
        shoulder: "",
        chest: "",
        legs: "",
        wrist: "",
        feet: "",
        waist: "",
        hands: "",
    });
    
    const [tierTwo, setTierTwo] = useState({
        head: "",
        shoulder: "",
        chest: "",
        legs: "",
        wrist: "",
        feet: "",
        waist: "",
        hands: "",
    });
    useEffect(() => {
        loadCharacters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { raidOne, raidTwo, raidThree } = raidTier;

    const onChange = (e) => {
        setRaidTier(e.target.value);
    };

    const onSubmit = (e) => {
        console.log('current state to submit', )
    };
    return (
        <div className="form-container">
            <h1>Current Items</h1>
            <form onSubmit={onSubmit}>
                <CurrentDropDown characters={characters}/>
                <label className="form-text" htmlFor="Raid Tier">Raid Tier</label>
                <select value={raidTier} onChange={onChange}>
                    <option value=""></option>
                    <option value={raidOne}>Molten Core</option>
                    <option value={raidTwo}>Blackwing Lair</option>
                    <option value={raidThree}>Temple of Ahn'Qiraj</option>
                </select>
                {raidTier === "Molten Core" ? <TierOne tierOne={tierOne} setTierOne={setTierOne} /> : console.log("nothing here yet")}
                {raidTier === "Blackwing Lair" ? <TierTwo tierTwo={tierTwo} setTierTwo={setTierTwo} /> : console.log("nothing here yet")}
                {raidTier === "Temple of Ahn'Qiraj" ? <AQ aqSet={aqSet} setAq={setAq} /> : console.log("nothing here yet")}
                <button type="submit" className="btn" style={{margin: "1rem auto", display:"block", width:"100%"}}>Submit</button>
            </form>
        </div>
    );
};

export default CurrentItems;