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
    <div style={{ display:'flex', flexDirection:"row" ,width:'100%' }}>
      <h1 style={{fontSize:64,color:'#fff'}}>Acesse agora a temperatura de qualquer lugar do mundo</h1>
      <div style={{backgroundColor:'#fff', borderRadius:10,padding:24, alignItems:'center'}}>
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

      </div>
      {selectedCity && (
        <CityWeather selectedCity={selectedCity} />
      )}
    </div>
  );
}

export default App;
