import React, { useEffect, useContext } from "react";
import CurrentContext from "../../../context/current/currentContext";

const ViewItems = () => {
  const currentContext = useContext(CurrentContext);
  const { loadCurrent, currentItems } = currentContext;

  useEffect(() => {
    loadCurrent();
  }, [])
  console.log(currentItems);
  return (
    <div className="view-items__main">
      <h1>Viewing Character Items</h1>
    </div>
  );
};

export default ViewItems;
