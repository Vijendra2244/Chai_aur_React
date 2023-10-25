import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passref = useRef(null);
  const copyPassword = useCallback(() => {
    passref.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  const passwordGeneretor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword]);
  useEffect(() => {
    passwordGeneretor();
  }, [length, numberAllowed, charAllowed, passwordGeneretor]);
  return (
    <>
      <div className="main">
        <h1 className="heading"> Password Generator</h1>
        <div className="inputField">
          <input
            value={password}
            className="inp1"
            type="text"
            ref={passref}
            readOnly
          />
          <button className="btn" onClick={copyPassword}>
            Copy
          </button>
        </div>
        <div className="option">
          <input
            value={length}
            type="range"
            min={6}
            max={99}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:({length})</label>
          <input
            id="inp2"
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="inp2">Number</label>
          <input
            id="inp3"
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="inp3">Char</label>
        </div>
      </div>
    </>
  );
}

export default App;
