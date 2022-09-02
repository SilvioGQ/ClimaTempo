import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import CityWeather from "./components/CityWeather";
import CitiesOptions from "./components/CitiesOptions";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedCity, setSelectedCity] = useState();
  
  const [place, setPlace] = useState();
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Header />
      <div style={{display:'flex', flexDirection:'row'}}>
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <Button
        text={"botão"}
        onclick={() => {setPlace(true) }}
      />        
      </div>
      {place && (
        <CitiesOptions setPlace={setPlace} setSelectedCity={setSelectedCity} inputValue={inputValue}/>
      )}
      {selectedCity && (
        <CityWeather selectedCity={selectedCity} />
      )}
    </div>
  );
}

export default App;
