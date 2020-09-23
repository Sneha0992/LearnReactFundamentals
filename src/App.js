import React from "react";
import "./styles.css";
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      <Greet></Greet>
      <Welcome />
    </div>
  );
}
