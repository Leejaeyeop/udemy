import logo from "./logo.svg";
import Child from "./Child";
import "./App.css";
import { useMemo, useCallback, useState } from "react";

function App() {
  const [parentNumber, setParentNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);

  // childNumber 변경신
  const func = useCallback(() => console.log("func!"), [childNumber]);
  const memoNumber = useMemo(() => childNumber + 10, [childNumber]);

  console.log("parent!");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>this is a parent number: {parentNumber} </p>
          <button onClick={() => setParentNumber(parentNumber + 1)}>
            increase parent number
          </button>
        </div>
        <div>
          <Child func={func} number={memoNumber}></Child>
          <button onClick={() => setChildNumber(childNumber + 1)}>
            increase child number
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
