import "./App.css";
import { useState } from "react";

const App2 = () => {
  const [count, setCount] = useState(10);
  const increaseHandler = (Value) => {
    ///++count diye krleo hbe for increasing 1
    setCount(count + Value);
  };
  const decreaseHandler = (Value) => {
    setCount(count - Value);
  };
  return (
    <div className="App">
      <h2>The Value of the Counter is {count} </h2>
      <button onClick={() => increaseHandler(1)}>Increase By 1</button>
      <button onClick={() => increaseHandler(5)}>Increase By 5</button>
      <button onClick={() => decreaseHandler(1)}>Decrease By 1</button>
      <button onClick={() => decreaseHandler(3)}>Decrease By 3</button>
    </div>
  );
};

export default App2;
