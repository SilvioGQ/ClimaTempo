import React from "react";

function Input({ inputValue, setInputValue }) {
  return (
    <div style={{ alignSelf: "center" }}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </div>
  );
}

export default Input;
