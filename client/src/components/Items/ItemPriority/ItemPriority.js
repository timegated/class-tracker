import React, { useState, useContext, useEffect } from 'react';
import CharContext from "../../../context/character/characterContext";
import classes from './ItemPriority.module.css';

const ItemPriority = () => {
    const charContext = useContext(CharContext);
    const { loadCharacters, characters } = charContext;

    useEffect(() => {
        loadCharacters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [item, setItem] = useState({
        charName: "",
        name: "",
        status: "",
        prio: "",
    });

    const {  name } = item;
    
    const onChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        console.log("On submit");
        console.log(e.target.value);
        e.preventDefault();
    };
 
    return (
        <form className={classes.prioContainer} onSubmit={onSubmit}>
            <h1>Item Priority</h1>
            <label className={classes.prioLabel} htmlFor="Character Name">Character Name:</label>            
            <select className={classes.prioInput}>
                <option></option>
                {characters !== null ? characters.docs.map(char => {
                    return (
                        <option key={char._id} value={char.name}>
                            {char.name} - {char.charClass}
                        </option>
                    )
                }) : console.log('nothing here yet')}
            </select>           
            <label className={classes.prioLabel} htmlFor="Item Name">Item Name:</label>
            <input className={classes.prioInput} value={name} type="text" name="name" onChange={onChange} />
            <label className={classes.prioLabel} htmlFor="Priority">Priority:</label>
            <select className={classes.prioInput} name="prio" onChange={onChange}>
                <option></option>
                <option value="slight-upgrade">Slight-upgrade</option>
                <option value="upgrade">Upgrade</option>
                <option value="big-upgrade">Big-upgrade</option>
            </select>
            <label className={classes.prioLabel} htmlFor="Status">Status:</label>
            <select className={classes.prioInput} name="status" onChange={onChange}>
                <option></option>
                <option value="not-received">Not Received</option>
                <option value="received">Received</option>
            </select>
            <button type="submit" className={classes.prioSubmit}>Submit</button>
        </form>
    );
};

export default ItemPriority;