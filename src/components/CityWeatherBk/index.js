import React, { useEffect, useState } from "react";
import { getCityHistory } from "../../Api";
import Button from "../Button";
import { VictoryChart, VictoryLine, VictoryBar } from "victory";
function CityWeatherBk({ selectedCity }) {
  const [locationWeather, setLocationWeather] = useState();
  const [locationWeatherChart, setLocationWeatherChart] = useState();
  const [day, setDay] = useState(0);
  const get = async () => {
    console.log(selectedCity)
    let res = await getCityHistory(selectedCity);
    console.log(res);
    setLocationWeather(res);
    let days = day + 8;
    let chart = res
    if (day > 7) {
      setLocationWeatherChart(chart);
    } else {
      setLocationWeatherChart(chart);
    }
    return res;
  };
  useEffect(() => {
    get();
  }, [day]);
  let arrayTemp = [];
  let arrayTempMax = [];
  let arrayTempMin = [];
  let arrayHumidity = [];
  console.log(arrayTemp);
  console.log(day);
  const B = (props) => <p style={{ fontWeight: "700" }}>{props.children}</p>;
  return (
    <div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          width: "100%",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: 48, color: "#fff", fontWeight: 200 }}>
          {locationWeather && locationWeather.city.name}
        </h1>
        <div>
          {locationWeather &&
            locationWeather.list[day].weather[0].main == "Rain" && (
              <img
                src={require("../../assets/Vector (1).png")}
                style={{
                  height: 70,
                  marginLeft: 10,
                  alignSelf: "center",
                  width: 70,
                }}
              />
            )}
          {locationWeather &&
            locationWeather.list[day].weather[0].main == "Clouds" && (
              <img
                src={require("../../assets/ant-design_cloud-outlined.png")}
                style={{
                  height: 70,
                  marginLeft: 10,
                  alignSelf: "center",
                  width: 70,
                }}
              />
            )}
          {locationWeather &&
            locationWeather.list[day].weather[0].main == "Snow" && (
              <img
                src={require("../../assets/bi_snow.png")}
                style={{
                  height: 70,
                  marginLeft: 10,
                  alignSelf: "center",
                  width: 70,
                }}
              />
            )}
          {locationWeather &&
            locationWeather.list[day].weather[0].main == "Clear" && (
              <img
                src={require("../../assets/bx_sun.png")}
                style={{
                  height: 70,
                  marginLeft: 10,
                  alignSelf: "center",
                  width: 70,
                }}
              />
            )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          width: "90vw",
          justifyContent: "space-between",
        }}
      >
        <div>
          {locationWeatherChart &&
            locationWeatherChart.list.map((i) => {
              let temp = i.main.temp;
              let temp_max = i.main.temp_max;
              let temp_min = i.main.temp_min;
              let umity = i.main.humidity;
              let date = i.dt_txt.substr(11, 5);
              arrayTemp.push({ y: temp, x: date });
              arrayTempMax.push({ y: temp_max, x: date });
              arrayTempMin.push({ y: temp_min, x: date });
              arrayHumidity.push({ y: umity, x: date });
              return <div>{/* <p>{selectedCity.name}</p> */}</div>;
            })}
          {locationWeather && (
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p>Data: </p>
                {day > 0 && (
                  <button
                    onClick={() => {
                      if (day > 7) return setDay(day - 8);
                    }}
                  >
                    Anterior
                  </button>
                )}
                <B> {locationWeather.list[day].dt_txt.substr(0, 10)}</B>
                <button
                  onClick={() => {
                    if (day < 28) return setDay(day + 8);
                  }}
                >
                  Próximo
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p>Descrição: </p>
                <B> {locationWeather.list[day].weather[0].description}</B>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p>Sensação termina: </p>{" "}
                <B> {locationWeather.list[day].main.feels_like}ºC</B>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p>Umidade: </p>
                <B> {locationWeather.list[day].main.humidity}%</B>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p>Temperatura atual: </p>
                <B> {locationWeather.list[day].main.temp}ºC</B>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p>Temperatura maxima: </p>
                <B> {locationWeather.list[day].main.temp_max}ºC</B>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p>Temperatura minima: </p>
                <B> {locationWeather.list[day].main.temp_min}ºC</B>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p>Velocidade do vento: </p>
                <B> {locationWeather.list[day].wind.speed} km/h</B>
              </div>
            </div>
          )}
        </div>
        <div>
          <div>
            <p>Variação de temperatura.</p>
            <VictoryChart width={600}>
              <VictoryLine
                style={{
                  data: { stroke: "#fff" },
                  parent: { border: "2px solid #fff", fill: "#fff" },
                  labels: { color: "#fff", fill: "#fff" },
                }}
                data={arrayTemp.slice(day, day + 8)}
              />
            </VictoryChart>
          </div>
          <div>
            <p>Percentual de umidade.</p>
            <VictoryChart
              width={600}
              minDomain={{ y: 0 }}
              domainPadding={{ x: 20 }}
            >
              <VictoryBar
                style={{ data: { fill: "#fff" } }}
                data={arrayHumidity.slice(day, day + 8)}
                barRatio={0.3}
              />
            </VictoryChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityWeatherBk;
