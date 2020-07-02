import React, { useState, useContext } from "react";
import CharacterContext from "../../context/character/characterContext";
import "./RegisterCharacter.css";

const Registration = () => {
    const [character, setCharacter] = useState({
        characterName: '',
        characterClass: '',
        guildName: ''
    });
    const characterContext = useContext(CharacterContext);

    const { register } = characterContext;

    const { characterName, characterClass, guildName } = character;

    const onChange = (e) => {
        setCharacter({ ...character, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        register({
            characterName,
            characterClass,
            guildName
        });
        setCharacter({
            characterName: "",
            characterClass: "",
            guildName: ""
        })
        e.preventDefault();
    };

    return (
        <form className="current-items__form" onSubmit={onSubmit}>
            <h1>Character Registration</h1>
            <label className="current-items__label" htmlFor="Character Name">Character Name</label>
            <input className="current-items__input" value={characterName} type="text" name="characterName" onChange={onChange} />
            <label className="current-items__label" htmlFor="Guild Rank">Guild Name</label>
            <input className="current-items__input" value={guildName} type="text" name="guildName" onChange={onChange} />
            <label className="current-items__label" htmlFor="Class">Class</label>
            <div className="radio-items">
                <input type="radio" name="characterClass" value="Warrior" checked={characterClass === "Warrior"} onChange={onChange} /> Warrior {" "}
                <input type="radio" name="characterClass" value="Hunter" checked={characterClass === "Hunter"} onChange={onChange} /> Hunter {" "}
                <input type="radio" name="characterClass" value="Mage" checked={characterClass === "Mage"} onChange={onChange} /> Mage {" "}
                <input type="radio" name="characterClass" value="Warlock" checked={characterClass === "Warlock"} onChange={onChange} /> Warlock {" "}
                <input type="radio" name="characterClass" value="Druid" checked={characterClass === "Druid"} onChange={onChange} /> Druid {" "}
                <input type="radio" name="characterClass" value="Shaman" checked={characterClass === "Shaman"} onChange={onChange} /> Shaman {" "}
                <input type="radio" name="characterClass" value="Paladin" checked={characterClass === "Paladin"} onChange={onChange} /> Paladin {" "}
                <input type="radio" name="characterClass" value="Rogue" checked={characterClass === "Rogue"} onChange={onChange} /> Rogue {" "}
            </div>
            <input type="submit" value="Submit" className="btn btn-block" />
        </form>
    );
};

export default Registration;