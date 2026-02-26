import React, { useState, useMemo } from "react";

const UseMemoDemo = () => {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ----------------------------------
  // PROBLEM: Expensive Calculation
  const slowFunction = (num) => {
    console.log("heavy Calculation Running...");

    // simulate heavy work
    for (let i = 0; i < 1000000000; i++) {}

    return num * 2;
  };

  const normalResult = slowFunction(count);

  // ----------------------------------
  // SOLUTION: useMemo Optimization
  const memoResult = useMemo(() => {
    console.log("Memo Calculation Running...");
    
    for (let i = 0; i < 1000000000; i++) {}

    return count * 2;
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useMemo Problem vs Solution</h2>

      <hr />

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Typing causes re-render"
        onChange={(e) => setText(e.target.value)}
      />

      <hr />

      <h3>Without useMemo: {normalResult}</h3>
      <h3>With useMemo: {memoResult}</h3>

    </div>
  );
};

export default UseMemoDemo;




