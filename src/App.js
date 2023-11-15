import Navbar from "./Component/Navbar";
import './App.css'
import React, { useState } from "react";
import Main_part from "./Component/Main_part";

function App(props) {
  var a = 0;
  let [count, setCount] = useState(a);
  const handleCount = () =>{
    setCount(++count);
  }
  const handleReset = () =>{
    setCount(0);
  }
  return (
    <div className="App">
      <Navbar count = {count} handleReset={handleReset}/>
      <Main_part count = {count} handleCount={handleCount}/>
    </div>
  );
}


export default App;
