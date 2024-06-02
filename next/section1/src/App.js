import logo from "./logo.svg";
import Child from "./Child";
import "./App.css";
import { memo, useMemo, useCallback, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  const func = useCallback(() => console.log("func!"), [number2]);
  const memoNumber = useMemo(() => number2 + 10, [number2]);

  console.log("parent!");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {number}

        <Child func={func} number={memoNumber}></Child>
        <button onClick={() => setNumber(number + 1)}>click!</button>
        <button onClick={() => setNumber2(number2 + 1)}>set number 2</button>
      </header>
    </div>
  );
}

export default App;
