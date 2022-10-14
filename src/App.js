import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import CityWeather from "./components/CityWeather";
import CitiesOptions from "./components/CitiesOptions";
import { getAllHistory } from "./Api";
import CityWeatherBk from "./components/CityWeatherBk";
// Para duramte a aula eu posso criar um botão que vai gerando gráficos para cada dia da semana.
function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedCity, setSelectedCity] = useState();
  const [selectedCityBK, setSelectedCityBK] = useState();
  const [mongo, setMongo] = useState();
  const [place, setPlace] = useState();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "colunm",
        height: "100vh",
        flex: 1,
      }}
    >
      {selectedCityBK ? (
        <div>
          <CityWeatherBk selectedCity={selectedCityBK} />
        </div>
      ) : 
      selectedCity ? <CityWeather selectedCity={selectedCity} /> :
      (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ fontSize: 64, color: "#fff", fontWeight: 200 }}>
              Acesse agora a temperatura de qualquer lugar do mundo
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "80%",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <img
                src={require("../src/assets/ant-design_cloud-outlined.png")}
                style={{ height: 121, width: 121 }}
              />
              <img
                src={require("../src/assets/bx_sun.png")}
                style={{ height: 121, width: 121 }}
              />
              <img
                src={require("../src/assets/Group.png")}
                style={{ height: 121, width: 121 }}
              />
              <img
                src={require("../src/assets/Vector (1).png")}
                style={{ height: 121, width: 121 }}
              />
              <img
                src={require("../src/assets/bi_snow.png")}
                style={{ height: 121, width: 121 }}
              />
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 24,
              alignItems: "center",
            }}
          >
            <button
              onClick={async () => {
                let res = await getAllHistory();
                if (res) return setMongo(res);
              }}
            >
              <p style={{ color: "#000" }}>
                <i>Ver Registro do banco de dados</i>
              </p>
            </button>
            {mongo &&
              mongo.map((i) => {
                return (
                  <button
                    onClick={() => {
                      setSelectedCityBK(i._id);
                    }}
                  >
                    <p style={{ color: "#000" }}>
                      {i.city.name} {i.list[0].dt_txt.substr(0, 10)} até{" "}
                      {i.list[39].dt_txt.substr(0, 10)}
                    </p>
                  </button>
                );
              })}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Input
                inputValue={inputValue}
                setInputValue={setInputValue}
                setPlace={setPlace}
              />
              <Button
                text={"Pesquisar"}
                onclick={() => {
                  if (place) return setPlace(false);
                  else return setPlace(true);
                }}
              />
            </div>

            {place && (
              <CitiesOptions
                setPlace={setPlace}
                setSelectedCity={setSelectedCity}
                inputValue={inputValue}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
