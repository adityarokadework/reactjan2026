import React, { useRef } from "react";

const UseRef2 = () => {

  console.log("Component Rendered");

  const valueRef = useRef(0);
  console.log(valueRef);

  const increase = () => {
    valueRef.current++;
    console.log("Ref Value:", valueRef.current);
  };

  return (
    <div>
      <h2>Check Console</h2>

      <button onClick={increase}>
        Increase Ref Value
      </button>
    </div>
  );
};

export default UseRef2;