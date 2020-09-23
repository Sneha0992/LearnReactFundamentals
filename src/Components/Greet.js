import React from "react";
// function Greet (){
//     return <h1>Hello Sneha</h1>
// }
export const Greet = ({ name }) => {
  console.log(name);
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
};
// export default Greet
