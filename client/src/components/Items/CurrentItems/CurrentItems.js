import React, { useState } from "react";
import "./CurrentItems.css";

const CurrentItems = () => {
    const [raidTier, setRaidTier] = useState({
        raidOne: "Molten Core",
        raidTwo: "Blackwing Lair",
        raidThree: "Temple of Ahn'Qiraj"
    });

    const [tierOneItems, setTierOneItems] = useState({
        head: "GiantStalker's Helmet",
        shoulders: "Giantstalker's Epaulets",
        bracers: "Giantstalker's Bracers",
        boots: "Giantstalker's Boots",
        belt: "Giantstalker's Belt",
        gloves: "Giantstalker's Gloves",
        legs: "Giantstalker's Legs",
        chest: "Giantstalker's Chest"
    });

    const [tierTwoItems, setTierTwoItems] = useState({
        headTwo: "Dragonstalker's Helmet",
        shouldersTwo: "Dragonstalker's Epaulets",
        bracersTwo: "Dragonstalker's Bracers",
        bootsTwo: "Dragonstalker's Boots",
        beltTwo: "Dragonstalker's Belt",
        glovesTwo: "Dragonstalker's Gloves",
        legsTwo: "Dragonstalker's Legs",
        chestTwo: "Dragonstalker's Chest",
        trinketzG: "Renataki's Charm of Beasts",
        trinketdM: "Royal Seal of Eldre'thelas",
        trinketsT: "Devilsaur Eye"
    });

    const [aQItems, setAqItems] = useState({
        headThree: "Striker's Diadem",
        shouldersThree: "Striker's Pauldrons",
        bootsThree: "Striker's Footguards",
        legsThree: "Striker's Leggings",
        chestThree: "Striker's Hauberk",
        trinketaQOne: "Jom Gabbar",
        trinketcC: "Earthstrike",
        trinketaQTwo: "Badge of the Swarmguard"
    });

    const { raidOne, raidTwo, raidThree } = raidTier;
    const { head, shoulders, bracers, boots, belt, gloves, legs, chest } = tierOneItems;
    const { headTwo, shouldersTwo, bracersTwo, bootsTwo, beltTwo, glovesTwo, legsTwo, chestTwo, trinketzG, trinketdM, trinketsT } = tierTwoItems;
    const { headThree, shouldersThree, bootsThree, legsThree, chestThree, trinketaQOne, trinketcC, trinketaQTwo } = aQItems;

    const onChange = (e) => {
        console.log(e.type);
        setRaidTier(e.target.value);
        setTierOneItems(e.target.value);
    };

    return (
        <div className="form-container">
            <form className="current-items__form">
                <label htmlFor="Raid Tier">Raid Tier</label>
                <select value={raidTier} onChange={onChange}>
                    <option value=""></option>
                    <option value={raidOne}>Molten Core</option>
                    <option value={raidTwo}>Blackwing Lair</option>
                    <option value={raidThree}>Temple of Ahn'Qiraj</option>
                </select>
                <div className="radio-items-tier-one">
                    <input type="radio" name="head" value="head" checked={ === "warrior"} onChange={onChange} /> Gianstalker's Helm{" "}
                    <input type="radio" name="characterClass" value="hunter" checked={characterClass === "hunter"} onChange={onChange} /> Hunter {" "}
                    <input type="radio" name="characterClass" value="mage" checked={characterClass === "mage"} onChange={onChange} /> Mage {" "}
                    <input type="radio" name="characterClass" value="warlock" checked={characterClass === "warlock"} onChange={onChange} /> Warlock {" "}
                    <input type="radio" name="characterClass" value="druid" checked={characterClass === "druid"} onChange={onChange} /> Druid {" "}
                    <input type="radio" name="characterClass" value="shaman" checked={characterClass === "shaman"} onChange={onChange} /> Shaman {" "}
                    <input type="radio" name="characterClass" value="paladin" checked={characterClass === "paladin"} onChange={onChange} /> Paladin {" "}
                    <input type="radio" name="characterClass" value="rogue" checked={characterClass === "rogue"} onChange={onChange} /> Rogue {" "}
                </div>
            </form>
        </div>
    );
};

export default CurrentItems;
