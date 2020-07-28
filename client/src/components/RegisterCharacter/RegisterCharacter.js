import React, { useState, useContext } from "react";
import CharacterContext from "../../context/character/characterContext";
import classes from './RegChar.module.css';

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
    };

    return (
        <form className={classes.formContainer} onSubmit={onSubmit}>
            <h1>Add Character</h1>
            <div className={classes.formGroup}>
                <label className={classes.inputLabel} htmlFor="Character Name">Character Name:</label>
                <input className={classes.inputText} value={name} type="text" name="name" onChange={onChange} />
            </div>
            <div className={classes.formGroup}>
                <label className={classes.inputLabel} htmlFor="Guild Rank">Guild Name:</label>
                <input className={classes.inputText} value={guild} type="text" name="guild" onChange={onChange} />
            </div>
            <div className={classes.formGroup}>
                <label className={classes.inputLabel} htmlFor="Class">Class:</label>
            <h5>Select One</h5>
            <ul className={classes.radioList}>
                <li><input type="radio" name="charClass" value="Warrior" checked={charClass === "Warrior"} onChange={onChange} /> Warrior </li>
                <li><input type="radio" name="charClass" value="Hunter" checked={charClass === "Hunter"} onChange={onChange} /> Hunter </li>
                <li><input type="radio" name="charClass" value="Mage" checked={charClass === "Mage"} onChange={onChange} /> Mage </li>
                <li><input type="radio" name="charClass" value="Warlock" checked={charClass === "Warlock"} onChange={onChange} /> Warlock </li>
                <li><input type="radio" name="charClass" value="Druid" checked={charClass === "Druid"} onChange={onChange} /> Druid </li>
                <li><input type="radio" name="charClass" value="Shaman" checked={charClass === "Shaman"} onChange={onChange} /> Shaman </li>
                <li><input type="radio" name="charClass" value="Paladin" checked={charClass === "Paladin"} onChange={onChange} /> Paladin </li>
                <li><input type="radio" name="charClass" value="Rogue" checked={charClass === "Rogue"} onChange={onChange} /> Rogue </li>
            </ul>
            </div>
            <input type="submit" value="Submit" className={classes.submitButton} />
        </form>
    );
};

export default Registration;