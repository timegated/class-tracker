import React, { useState } from "react";

const AQ = () => {
  const [aqSet, setAq] = useState({
    head: "",
    legs: "",
    feet: "",
    chest: "",
    shoulder: "",
    hands: ""
  });

  const { head, legs, feet, chest, shoulder, hands } = aqSet;

  const onChange = (e) => {
    setAq({ ...aqSet, [e.target.name]: e.target.value });
  }
  console.log(aqSet)
  return (
    <div>
      <label className="form-text" htmlFor="Tier Two">Tier 2 Items</label>
      <ul className="form-text form-radio-select">
        <li><input type="radio" name="head" value="Striker's Diadem" checked={head === "Striker's Diadem"} onChange={onChange} /> Striker's Diadem{" "}</li>
        <li><input type="radio" name="shoulder" value="Striker's Pauldrons" checked={shoulder === "Striker's Pauldrons"} onChange={onChange} /> Striker's Pauldrons {" "}</li>
        <li><input type="radio" name="chest" value="Striker's Hauberk" checked={chest === "Striker's Hauberk"} onChange={onChange} /> Striker's Hauberk {" "}</li>
        <li><input type="radio" name="legs" value="Striker's Leggings" checked={legs === "Striker's Leggings"} onChange={onChange} /> Striker's Leggings {" "}</li>
        <li><input type="radio" name="feet" value="Striker's Footguards" checked={feet === "Striker's Footguards"} onChange={onChange} /> Striker's Footguards {" "}</li>
        <li><input type="radio" name="hands" value="Vek'lor's Gloves" checked={hands === "Vek'lors Gloves"} onChange={onChange} /> Vek'lors Gloves {" "}</li>
      </ul>
    </div>
  );
};

export default AQ;
