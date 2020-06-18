import React, { useState } from "react";
import "../../RegisterCharacter/RegisterCharacter";

const CurrentItems = () => {
    const [raidTier, setRaidTier] = useState("");

    const onChange = (e) => {
        console.log(e.type);
        setRaidTier(e.target.value);
    };
    
    return (
        <div className="form-container">
            <form className="current-items__form">
                <label htmlFor="Raid Tier">Raid Tier</label>
                <select value={raidTier} onChange={onChange}>
                    <option value=""></option>
                    <option value="Molten Core">Molten Core</option>
                    <option value="Blackwing Lair">Blackwing Lair</option>
                    <option value="Temple of Ahn'Qiraj">Temple of Ahn'Qiraj</option>
                </select>
            </form>
        </div>
    );
};

export default CurrentItems;
