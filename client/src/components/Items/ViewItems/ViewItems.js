import React, { useState } from "react";
import axios from 'axios';

const ViewItems = () => {

  const [searchTerm, setSearchTerm] = useState({
    subclass: '',
    slot: '',
  });
  const { subclass, slot } = searchTerm;

  const getItems = async (sc, s) => {
    const items = await axios.get(`/api/itemdb/${sc}/${s}`)
    console.log(items.data)
  };

  const onChange = (e) => {
    setSearchTerm({ ...searchTerm, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    getItems(subclass, slot);

    e.preventDefault();
  }
  return (
    <form className="view-items__main" onSubmit={onSubmit}>
      <div>
        <label htmlFor="">Subclass: </label>
        <input name="subclass" type="text" value={subclass} onChange={onChange} />
      </div>
      <div>
        <label htmlFor="">Slot: </label>
        <input name="slot" type="text" value={slot} onChange={onChange} />
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default ViewItems;
