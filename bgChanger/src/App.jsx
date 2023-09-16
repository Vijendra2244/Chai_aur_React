import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <h1>Back-ground-changer</h1>
      <div style={{ backgroundColor: color }} className="main">
        <div className="cont">
          <button onClick={() => setColor("red")} id="first">
            red
          </button>
          <button onClick={() => setColor("blue")} id="second">
            blue
          </button>
          <button onClick={() => setColor("yellow")} id="third">
            yellow
          </button>
          <button onClick={() => setColor("orange")} id="fourth">
            orange
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
