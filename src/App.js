import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [array, setArray] = useState([]);
  const [result, setResult] = useState([]);
  return (
    <div className="App">
      <h1>배열 메서드 활용</h1>
      <input type="text" placeholder="Enter text" />
      <br />
      <button>forEach</button>
      <div>
        <h3>원본배열</h3>
        <p>{array.join(", ")}</p>
      </div>
      <div>
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
