import React, { useState, useContext } from "react";
import PlayerContext from "../../context/player/playerContext";
import "./RegisterCharacter.css";

const Registration = () => {
    const [player, setPlayer] = useState({
        characterName: '',
        characterClass: '',
        guildName: ''
    });
    const playerContext = useContext(PlayerContext);

    const { register } = playerContext;

    const { characterName, characterClass, guildName } = player;

    const onChange = (e) => {
        setPlayer({ ...player, [e.target.name]: e.target.value });
        console.log(player)
    };

    const onSubmit = (e) => {
        console.log(e);
        register({
            characterName,
            characterClass,
            guildName
        });
        e.preventDefault();
    };

    return (
        <form className="current-items__form" onSubmit={onSubmit}>
            <h1>Initial Registration</h1>
            <label className="current-items__label" htmlFor="Character Name">Character Name</label>
            <input className="current-items__input" value={characterName} type="text" name="characterName" onChange={onChange} />
            <label className="current-items__label" htmlFor="Guild Rank">Guild Name</label>
            <input className="current-items__input" value={guildName} type="text" name="guildName" onChange={onChange} />
            <label className="current-items__label" htmlFor="Class">Class</label>
            <div className="radio-items">
                <input type="radio" name="characterClass" value="warrior" checked={characterClass === "warrior"} onChange={onChange} /> Warrior {" "}
                <input type="radio" name="characterClass" value="hunter" checked={characterClass === "hunter"} onChange={onChange} /> Hunter {" "}
                <input type="radio" name="characterClass" value="mage" checked={characterClass === "mage"} onChange={onChange} /> Mage {" "}
                <input type="radio" name="characterClass" value="warlock" checked={characterClass === "warlock"} onChange={onChange} /> Warlock {" "}
                <input type="radio" name="characterClass" value="druid" checked={characterClass === "druid"} onChange={onChange} /> Druid {" "}
                <input type="radio" name="characterClass" value="shaman" checked={characterClass === "shaman"} onChange={onChange} /> Shaman {" "}
                <input type="radio" name="characterClass" value="paladin" checked={characterClass === "paladin"} onChange={onChange} /> Paladin {" "}
                <input type="radio" name="characterClass" value="rogue" checked={characterClass === "rogue"} onChange={onChange} /> Rogue {" "}
            </div>
            <input type="submit" value="Submit" className="btn btn-block" />
        </form>
    );
};

export default Registration;