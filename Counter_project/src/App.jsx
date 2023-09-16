import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  // let counter = 5;
  let addValue = () => {
    setCounter(counter + 1);
  };
  let removeValue = () => {
    setCounter(counter - 1);
    if (counter <= 0) {
      setCounter(counter == 0);
    }
  };

  return (
    <>
      <div className="main">
      <h1 className="head" >Counter :{counter} </h1>
      <button className="btn" onClick={addValue}> Add</button>
      <button className="btn" onClick={removeValue}>Remove</button>
      </div>
    </>
  );
}

export default App;
