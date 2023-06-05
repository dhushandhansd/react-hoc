import React, { useState } from "react";

function HigherOrderComp(ChildComp) {
  function NewComp() {
    const [counter, setCounter] = useState(1);
    const increaseCounterHandler = (type) => {
      if (type === "increase") {
        setCounter((counter += 1));
      } else if (type === "decrease") {
        setCounter((counter -= 1));
      }
    };
    return (
      <ChildComp counter={counter} counterHandler={increaseCounterHandler} />
    );
  }
  return NewComp;
}

export default HigherOrderComp;
