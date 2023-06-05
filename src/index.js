import React from "react";
import ReactDOM from "react-dom";
import PersonType1 from "./PersonType1";
import PersonType2 from "./PersonType2";

const App = () => {
  return (
    <div>
      <PersonType1 />
      <PersonType2 />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
