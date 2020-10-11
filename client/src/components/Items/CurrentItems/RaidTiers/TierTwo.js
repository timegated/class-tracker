import React from "react";

const TierTwo = ({ tierTwo, setTierTwo }) => {

  const { head, shoulder, chest, legs, wrist, feet, waist, hands } = tierTwo;


  const onChange = (e) => {
    setTierTwo({ ...tierTwo, [e.target.name]: e.target.value });
  }
  return (
    <>
      <label className="form-text" htmlFor="Tier Two">Tier 2 Items</label>
      <ul className="form-text form-radio-select">
        <li><input type="radio" name="head" value="Dragonstalker's Helm" checked={head === "Dragonstalker's Helm"} onChange={onChange} /> Dragonstalker's Helm{" "}</li>
        <li><input type="radio" name="shoulder" value="Dragonstalker's Shoulders" checked={shoulder === "Dragonstalker's Shoulders"} onChange={onChange} /> Dragonstalker's Shoulders {" "}</li>
        <li><input type="radio" name="chest" value="Dragonstalker's Chest" checked={chest === "Dragonstalker's Chest"} onChange={onChange} /> Dragonstalker's Chest {" "}</li>
        <li><input type="radio" name="legs" value="Dragonstalker's Leggings" checked={legs === "Dragonstalker's Leggings"} onChange={onChange} /> Dragonstalker's Leggings {" "}</li>
        <li><input type="radio" name="wrist" value="Dragonstalker's Bracers" checked={wrist === "Dragonstalker's Bracers"} onChange={onChange} /> Dragonstalker's Bracers {" "}</li>
        <li><input type="radio" name="feet" value="Dragonstalker's Boots" checked={feet === "Dragonstalker's Boots"} onChange={onChange} /> Dragonstalker's Boots {" "}</li>
        <li><input type="radio" name="waist" value="Dragonstalker's Belt" checked={waist === "Dragonstalker's Belt"} onChange={onChange} /> Dragonstalker's Belt {" "}</li>
        <li><input type="radio" name="hands" value="Dragonstalker's Gloves" checked={hands === "Dragonstalker's Gloves"} onChange={onChange} /> Dragonstalker's Gloves {" "}</li>
      </ul>
    </>
  );
};

export default TierTwo;
