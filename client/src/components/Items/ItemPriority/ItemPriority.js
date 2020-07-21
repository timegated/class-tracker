import React, { useState } from 'react';


const ItemPriority = () => {
    const [item, setItem] = useState({
        name: "",
        status: "",
        prio: "",
    });

    const { name } = item;

    const onChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        console.log("On submit");
    }
    console.log(item)
    return (
        <form className="form-container" onSubmit={onSubmit}>
            <h1>Item Priority</h1>
            <label className="current-items__label" htmlFor="Item Name">Item Name</label>
            <input className="current-items__input" value={name} type="text" name="name" onChange={onChange} />
            <label className="current-items__label" htmlFor="Priority">Priority</label>
            <select className="current-items__input" name="prio" onChange={onChange}>
                <option></option>
                <option value="slight-upgrade">Slight-upgrade</option>
                <option value="upgrade">Upgrade</option>
                <option value="big-upgrade">Big-upgrade</option>
            </select>
            <label className="current-items__label" htmlFor="Status">Status</label>
            <select className="current-items__input" name="status" onChange={onChange}>
                <option></option>
                <option value="not-received">Not Received</option>
                <option value="received">Received</option>
            </select>
            <button type="submit" className="btn" style={{ margin: "1rem auto", display: "block", width: "100%" }}>Submit</button>
        </form>
    );
};

export default ItemPriority;