import React, { useState } from "react";
import "./CurrentItems.css";

const CurrentItems = () => {
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
    const { headTwo, shouldersTwo, bracersTwo, bootsTwo, beltTwo, glovesTwo, legsTwo, chestTwo, trinketzG, trinketdM, trinketsT } = tierTwoItems;
    const { headThree, shouldersThree, bootsThree, legsThree, chestThree, trinketaQOne, trinketcC, trinketaQTwo } = aQItems;

    const onChange = (e) => {
        console.log(tierOneItems.head);
        setRaidTier(e.target.value);
        setTierOneItems({ ...tierOneItems, [e.target.name]: e.target.value });
    };

    return (
        <div className="current-items-form-container">
            <form className="current-items__form">
                <label htmlFor="Raid Tier">Raid Tier</label>
                <select value={raidTier} onChange={onChange}>
                    <option value=""></option>
                    <option value={raidOne}>Molten Core</option>
                    <option value={raidTwo}>Blackwing Lair</option>
                    <option value={raidThree}>Temple of Ahn'Qiraj</option>
                </select>
                <label className="tier-one-label" htmlFor="Tier One">Tier 1 Items</label>
                <div className="radio-items-tier-one">
                    <input type="radio" name="head" value="Giantstalker's Helm" checked={head === "Giantstalker's Helm"} onChange={onChange} /> Gianstalker's Helm{" "}
                    <input type="radio" name="shoulder" value="Giantstalker's Epaulets" checked={shoulder === "Giantstalker's Epaulets"} onChange={onChange} />Giantstalker's Epaulets {" "}
                    <input type="radio" name="chest" value="Giantstalker's Chest" checked={chest === "Giantstalker's Chest"} onChange={onChange} /> Giantstalker's Chest {" "}
                    <input type="radio" name="legs" value="Giantstalker's Leggings" checked={legs === "Giantstalker's Leggings"} onChange={onChange} /> Giantstalker's Leggings {" "}
                    <input type="radio" name="bracers" value="Giantstalker's Bracers" checked={bracers === "Giantstalker's Bracers"} onChange={onChange} /> Giantstalker's Bracers {" "}
                    <input type="radio" name="boots" value="Giantstalker's Boots" checked={boots === "Giantstalker's Boots"} onChange={onChange} /> Giantstalker's Boots {" "}
                    <input type="radio" name="belt" value="Giantstalker's Belt" checked={belt === "Giantstalker's Belt"} onChange={onChange} /> Giantstalker's Belt {" "}
                    <input type="radio" name="gloves" value="Giantstalker's Gloves" checked={gloves === "Giantstalker's Gloves"} onChange={onChange} /> Giantstalker's Gloves {" "}
                </div>
            </form>
        </div>
    );
};

export default CurrentItems;