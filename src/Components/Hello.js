import React from "react";
const Hello = () => {
  return (
    // <div>
    //   <h1>With JSX</h1>
    // </div>
    React.createElement(
      "div",
      null,
      React.createElement("h1", null, "Without JSX")
    )
  );
};
export default Hello;
