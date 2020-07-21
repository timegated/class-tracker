import React, { useState } from "react";
import CurrentDropDown from "./CurrentDropDown";
import TierOne from "./TierOne";
import TierTwo from "./TierTwo";
import AQ from "./AQ";
const CurrentItems = () => {
    const [raidTier, setRaidTier] = useState({
        raidOne: "Molten Core",
        raidTwo: "Blackwing Lair",
        raidThree: "Temple of Ahn'Qiraj"
    });
  
    const { raidOne, raidTwo, raidThree } = raidTier;
    const onChange = (e) => {
        setRaidTier(e.target.value);
    };


    return (
        <div className="form-container">
            <h1>Form used to register current items each character has individually</h1>
            <form>
                <CurrentDropDown />
                <label className="form-text" htmlFor="Raid Tier">Raid Tier</label>
                <select value={raidTier} onChange={onChange}>
                    <option value=""></option>
                    <option value={raidOne}>Molten Core</option>
                    <option value={raidTwo}>Blackwing Lair</option>
                    <option value={raidThree}>Temple of Ahn'Qiraj</option>
                </select>
                {raidTier === "Molten Core" ? <TierOne /> : console.log("error")}
                {raidTier === "Blackwing Lair" ? <TierTwo /> : console.log("error")}
                {raidTier === "Temple of Ahn'Qiraj" ? <AQ /> : console.log("error")}
                <button type="submit" className="btn" style={{margin: "1rem auto", display:"block", width:"100%"}}>Submit</button>
            </form>
        </div>
    );
};

export default CurrentItems;