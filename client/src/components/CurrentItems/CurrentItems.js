import React, { useState } from "react";
import "./CurrentItems.css";

const CurrentItems = () => {
    const [player, setPlayer] = useState({
        character: '',
        charClass: '',
        guildRank: ''
    });
    
    const { character, charClass, guildRank } = player;

    const onChange = (e) => {
        setPlayer({ ...player, [e.target.name]: e.target.value });
        console.log(e.type)
    };

    return (
        <form className="current-items__form">
            <label className="current-items__label" htmlFor="Character Name">Character Name</label>
            <input className="current-items__input" type="text" name="character"/>
            <label className="current-items__label" htmlFor="Guild Rank">Guild Rank</label>
            <input className="current-items__input" type="text" name="guildrank" />
            <label className="current-items__label" htmlFor="Class">Class</label>
            <div className="radio-items">
                <input type="radio" name="charClass" value="warrior" checked={charClass === "warrior"} onChange={onChange} /> Warrior {" "}
                <input type="radio" name="charClass" value="hunter" checked={charClass === "hunter"} onChange={onChange} /> Hunter {" "}
                <input type="radio" name="charClass" value="mage" checked={charClass === "mage"} onChange={onChange} /> Mage {" "}
                <input type="radio" name="charClass" value="warlock" checked={charClass === "warlock"} onChange={onChange} /> Warlock {" "}
                <input type="radio" name="charClass" value="druid" checked={charClass === "druid"} onChange={onChange} /> Druid {" "}
                <input type="radio" name="charClass" value="shaman" checked={charClass === "shaman"} onChange={onChange} /> Shaman {" "}
                <input type="radio" name="charClass" value="paladin" checked={charClass === "paladin"} onChange={onChange} /> Paladin {" "}
                <input type="radio" name="charClass" value="rogue" checked={charClass === "rogue"} onChange={onChange} /> Rogue {" "}
            </div>
        </form>
    );
};

export default CurrentItems;