import React from 'react';

const ItemPriority = () => {
    return (
        <form className="form-container">
            <h1>This form is used for creating a future "wants" list for individual characters. Info displayed on Character's page</h1>
            <h1>Idea: Generates a checklist of sorts that a player can interact with to remind themselves when they've received an item</h1>
                <label htmlFor="item">Item</label>
                <input type="text"/>
            
            
                <label htmlFor="upgrade"></label>
                <input type="text"/>
            
        </form>
    );
};

export default ItemPriority;