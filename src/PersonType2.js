import React from "react";
import HigherOrderComp from "./HOC";

const PersonType2 = ({ counter, counterHandler }) => {
  return (
    <div>
      <h5>{counter}</h5>
      <button onClick={counterHandler("decrease")}>Increase Age</button>
    </div>
  );
};

export default HigherOrderComp(PersonType2);
