import React from "react";
import HigherOrderComp from "./HOC";

const PersonType1 = ({ counter, counterHandler }) => {
  return (
    <div>
      <h5>{counter}</h5>
      <button onClick={counterHandler("increase")}>Increase Age</button>
    </div>
  );
};

export default HigherOrderComp(PersonType1);
