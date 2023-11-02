import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState([]);
  const handleForEach = () => {
    let temp = "";
    array.forEach((item, idx) => (temp += `${idx}: ${item} `));
    setResult(temp);
  };
  const handleFilter = () =>
    setResult(() => array.filter((item) => item.includes(query)));
  const handleMap = () =>
    setResult(array.map((item) => item.toUpperCase()).join(", "));
  const handleReduce = () => setResult(array.reduce((arr, cur) => arr + cur));
  const handlePush = () => {
    if (query == "") return;
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };
  const handlePop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };
  const handleSlice = () => {
    const newArr = array.slice(1, 4);
    setResult(newArr.join(", "));
  };
  const handleSplice = () => {
    const newArr = [...array];
    newArr.splice(2, 2, "kiwi", "lime");
    setResult(newArr.join(", "));
  };
  return (
    <div className="App">
      <h1>배열 메서드 활용</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Enter text.."
      />
      <br />
      <button onClick={handleForEach}>forEach</button>
      <button onClick={handleFilter}>filter</button>
      <button onClick={handleMap}>map</button>
      <button onClick={handleReduce}>reduce</button>
      <button onClick={handlePush}>push</button>
      <button onClick={handlePop}>pop</button>
      <button onClick={handleSlice}>slice</button>
      <button onClick={handleSplice}>splice</button>
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
