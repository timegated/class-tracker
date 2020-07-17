import React, { useState, useContext } from "react";
import CharacterContext from "../../context/character/characterContext";

const Registration = () => {
    const [character, setCharacter] = useState({
        name: '',
        charClass: '',
        guild: ''
    });
    const characterContext = useContext(CharacterContext);

    const { register } = characterContext;

    const { name, charClass, guild } = character;

    const onChange = (e) => {
        setCharacter({ ...character, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        register({
            name,
            charClass,
            guild,
        });
        setCharacter({
            name: "",
            charClass: "",
            guild: "",
        })
        e.preventDefault();
    };

    return (
        <form className="form-container" onSubmit={onSubmit}>
            <h1>Character Registration</h1>
            <label className="current-items__label" htmlFor="Character Name">Character Name</label>
            <input className="current-items__input" value={name} type="text" name="name" onChange={onChange} />
            <label className="current-items__label" htmlFor="Guild Rank">Guild Name</label>
            <input className="current-items__input" value={guild} type="text" name="guild" onChange={onChange} />
            <label className="current-items__label" htmlFor="Class">Class</label>
            <div className="radio-items">
                <input type="radio" name="charClass" value="Warrior" checked={charClass === "Warrior"} onChange={onChange} /> Warrior {" "}
                <input type="radio" name="charClass" value="Hunter" checked={charClass === "Hunter"} onChange={onChange} /> Hunter {" "}
                <input type="radio" name="charClass" value="Mage" checked={charClass === "Mage"} onChange={onChange} /> Mage {" "}
                <input type="radio" name="charClass" value="Warlock" checked={charClass === "Warlock"} onChange={onChange} /> Warlock {" "}
                <input type="radio" name="charClass" value="Druid" checked={charClass === "Druid"} onChange={onChange} /> Druid {" "}
                <input type="radio" name="charClass" value="Shaman" checked={charClass === "Shaman"} onChange={onChange} /> Shaman {" "}
                <input type="radio" name="charClass" value="Paladin" checked={charClass === "Paladin"} onChange={onChange} /> Paladin {" "}
                <input type="radio" name="charClass" value="Rogue" checked={charClass === "Rogue"} onChange={onChange} /> Rogue {" "}
            </div>
            <input type="submit" value="Submit" className="btn btn-block" />
        </form>
    );
};

export default Registration;