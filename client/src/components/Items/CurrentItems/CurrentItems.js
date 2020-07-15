import React, { useState } from "react";
import CurrentDropDown from "./CurrentDropDown";

const CurrentItems = () => {
    // why does this component have state when state is already managed via context?
    // what is it's function: Placeholder at the moment, will most likely create a collection for housing this information and call it from the api
    const [raidTier, setRaidTier] = useState({
        raidOne: "Molten Core",
        raidTwo: "Blackwing Lair",
        raidThree: "Temple of Ahn'Qiraj"
    });
    const [tierOneItems, setTierOneItems] = useState({
        head: "",
        shoulders: "",
        bracers: "",
        boots: "",
        belt: "",
        gloves: "",
        legs: "",
        chest: ""
    });
    
    const { raidOne, raidTwo, raidThree } = raidTier;
    const { head, shoulder, bracers, boots, belt, gloves, legs, chest } = tierOneItems;


    const onChange = (e) => {
        setRaidTier(e.target.value);
        setTierOneItems({ ...tierOneItems, [e.target.name]: e.target.value });
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
                <label className="form-text" htmlFor="Tier One">Tier 1 Items</label>
                <ul className="form-text form-radio-select">
                    <li><input type="radio" name="head" value="Giantstalker's Helm" checked={head === "Giantstalker's Helm"} onChange={onChange} /> Gianstalker's Helm{" "}</li>
                    <li><input type="radio" name="shoulder" value="Giantstalker's Epaulets" checked={shoulder === "Giantstalker's Epaulets"} onChange={onChange} /> Giantstalker's Epaulets {" "}</li>
                    <li><input type="radio" name="chest" value="Giantstalker's Chest" checked={chest === "Giantstalker's Chest"} onChange={onChange} /> Giantstalker's Chest {" "}</li>
                    <li><input type="radio" name="legs" value="Giantstalker's Leggings" checked={legs === "Giantstalker's Leggings"} onChange={onChange} /> Giantstalker's Leggings {" "}</li>
                    <li><input type="radio" name="bracers" value="Giantstalker's Bracers" checked={bracers === "Giantstalker's Bracers"} onChange={onChange} /> Giantstalker's Bracers {" "}</li>
                    <li><input type="radio" name="boots" value="Giantstalker's Boots" checked={boots === "Giantstalker's Boots"} onChange={onChange} /> Giantstalker's Boots {" "}</li>
                    <li><input type="radio" name="belt" value="Giantstalker's Belt" checked={belt === "Giantstalker's Belt"} onChange={onChange} /> Giantstalker's Belt {" "}</li>
                    <li><input type="radio" name="gloves" value="Giantstalker's Gloves" checked={gloves === "Giantstalker's Gloves"} onChange={onChange} /> Giantstalker's Gloves {" "}</li>
                </ul>
            </form>
        </div>
    );
};

export default CurrentItems;