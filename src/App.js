// import SkillSection from "./SkillSection";
import { useReducer, useState } from "react";
import "./App.css";
// import Form from "./components/Form";
// import StudentSection from "./components/StudentSection";
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increase": {
      return action.value + currentState;
    }
    case "decrease": {
      return currentState - action.value;
    }
    default: {
      return currentState;
    }
  }
};

const App = () => {
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      {/* <Form />
      <StudentSection /> */}
      <p>The value of the counter is {counter}</p>
      <button onClick={() => dispatch({ type: "increase", value: 1 })}>
        Increase By 1
      </button>
      <button onClick={() => dispatch({ type: "increase", value: 5 })}>
        Increase By 5
      </button>
      <button onClick={() => dispatch({ type: "decrease", value: 1 })}>
        Decrease By 1
      </button>
      <button onClick={() => dispatch({ type: "decrease", value: 2 })}>
        Decrease By 2
      </button>
    </div>
  );
};
export default App;
