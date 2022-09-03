import React from "react";

function Input({ inputValue, setInputValue }) {
  return (
    <div style={{ alignSelf: "center", borderRadius:10, borderWidth:1,borderColor:'#545454', height:72 }}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        style={{fontSize:18,padding:10,width:480,}}
      />
    </div>
  );
}

export default Input;
