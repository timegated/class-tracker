import React, { useState } from "react";

const TierOne = () => {
  const [tierOne, setTierOne] = useState({
    head: "",
    shoulder: "",
    chest: "",
    legs: "",
    wrist: "",
    feet: "",
    waist: "",
    hands: "",
  })
  const { head, shoulder, chest, legs, wrist, feet, waist, hands } = tierOne;
  const onChange = (e) => {
      setTierOne({ ...tierOne, [e.target.name]: e.target.value });
  }


  return (
    <>
      <label className="form-text" htmlFor="Tier One">Tier 1 Items</label>
      <ul className="form-text form-radio-select">
        <li><input type="radio" name="head" value="Giantstalker's Helm" checked={head === "Giantstalker's Helm"} onChange={onChange} /> Gianstalker's Helm{" "}</li>
        <li><input type="radio" name="shoulder" value="Giantstalker's Epaulets" checked={shoulder === "Giantstalker's Epaulets"} onChange={onChange} /> Giantstalker's Epaulets {" "}</li>
        <li><input type="radio" name="chest" value="Giantstalker's Chest" checked={chest === "Giantstalker's Chest"} onChange={onChange} /> Giantstalker's Chest {" "}</li>
        <li><input type="radio" name="legs" value="Giantstalker's Leggings" checked={legs === "Giantstalker's Leggings"} onChange={onChange} /> Giantstalker's Leggings {" "}</li>
        <li><input type="radio" name="wrist" value="Giantstalker's Bracers" checked={wrist === "Giantstalker's Bracers"} onChange={onChange} /> Giantstalker's Bracers {" "}</li>
        <li><input type="radio" name="feet" value="Giantstalker's Boots" checked={feet === "Giantstalker's Boots"} onChange={onChange} /> Giantstalker's Boots {" "}</li>
        <li><input type="radio" name="waist" value="Giantstalker's Belt" checked={waist === "Giantstalker's Belt"} onChange={onChange} /> Giantstalker's Belt {" "}</li>
        <li><input type="radio" name="hands" value="Giantstalker's Gloves" checked={hands === "Giantstalker's Gloves"} onChange={onChange} /> Giantstalker's Gloves {" "}</li>
      </ul>
    </>
  );
};

export default TierOne;
