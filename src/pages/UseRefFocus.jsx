import React, { useRef } from "react";

const UseRefFocus = () => {

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useRef - Focus Input</h2>

      <input
        ref={inputRef}
        placeholder="Click button to focus"
      />

      <br /><br />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
};

export default UseRefFocus;


// useState = updates UI
// But sometimes we want to store value without updating UI

// useRef stores a value that stays between renders but does NOT re-render the component.