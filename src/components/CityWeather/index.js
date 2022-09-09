import React, { useEffect, useState } from "react";
import { getAll, getToCharts } from "../../Api";
import Button from "../Button";
import { VictoryChart, VictoryLine, VictoryBar } from "victory";
function CityWeather({ selectedCity }) {
  const [locationWeather, setLocationWeather] = useState();
  const [locationWeatherChart, setLocationWeatherChart] = useState();
  const [day, setDay] = useState(0);
  const get = async () => {
    let res = await getAll(selectedCity.lat, selectedCity.lon);
    console.log(res);
    setLocationWeather(res);
    return res;
  };
  const get2 = async () => {
    let days = day+8
    let chart = await getToCharts(selectedCity.lat, selectedCity.lon,days);
    if(day>7){
      setLocationWeatherChart(chart)
    }else{
      setLocationWeatherChart(chart)
    }
    return chart;
  };
  useEffect(() => {
    get();
  }, []);
  useEffect(() => {
    get2();
  }, [day]);
  let arrayTemp = [];
  let arrayTempMax = [];
  let arrayTempMin = [];
  let arrayHumidity = [];
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
          {selectedCity.name}
          {selectedCity.state ? "," + selectedCity.state : null},{" "}
          {selectedCity.country}
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
                {day > 0 && <button onClick={() => {if(day>7) return setDay(day-8)}}>Anterior</button>}
                <B> {locationWeather.list[day].dt_txt.substr(0, 10)}</B>
                <button onClick={() => {if(day<28) return setDay(day+8)}}>Próximo</button>
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
            <p>Variação de temperatura para amanhã.</p>
            <VictoryChart width={600}>
              <VictoryLine
                style={{
                  data: { stroke: "#fff" },
                  parent: { border: "2px solid #fff", fill: "#fff" },
                  labels: { color: "#fff", fill: "#fff" },
                }}
                data={arrayTemp}
              />
            </VictoryChart>
          </div>
          <div>
            <p>Percentual de umidade para amanhã.</p>
            <VictoryChart
              width={600}
              minDomain={{ y: 0 }}
              domainPadding={{ x: 20 }}
            >
              <VictoryBar
                style={{ data: { fill: "#fff" } }}
                data={arrayHumidity}
                barRatio={0.3}
              />
            </VictoryChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityWeather;
