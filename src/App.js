import React from "react";
import "./styles.css";
// import { Greet } from "./Components/Greet";
// import Welcome from "./Components/Welcome";
//import Hello from "./Components/Hello";
// import Message from "./Components/Message";
// import Counter from "./Components/Counter";
import FunctionClick from "./Components/Functionlick";
import ClassClick from "./Components/ClassClick";
export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      {/* <Greet name="Sneha"></Greet>
      <button> Action </button>
      <Greet name="Pankaj"></Greet>
      <Welcome name="Sneha" />
      <Counter />
      <Message /> */}
      {/* <Hello /> */}
      <FunctionClick />
      <ClassClick />
    </div>
  );
}
