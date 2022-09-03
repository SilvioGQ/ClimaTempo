import React, { useEffect, useState } from "react";
import { getAll } from "../../Api";
import Button from "../Button";
import {VictoryChart, VictoryLine, VictoryBar} from 'victory'
function CityWeather({ selectedCity }) {
  const [locationWeather, setLocationWeather] = useState();
  const get = async ()=>{
    let res = await getAll(selectedCity.lat, selectedCity.lon)
    console.log(res)
    setLocationWeather(res)
    return res
  }
  useEffect(() => {
    get();
  }, []);
  let arrayTemp = []
  let arrayTempMax = []
  let arrayTempMin = []
  let arrayHumidity = []
  return (
    <div>
        {locationWeather && locationWeather.list.map(i=>{
          let temp = i.main.temp
          let temp_max = i.main.temp_max
          let temp_min = i.main.temp_min
          let umity = i.main.humidity
          let date = i.dt_txt.substr(11,5)
          arrayTemp.push({y:temp,x:date})
          arrayTempMax.push({y:temp_max,x:date})
          arrayTempMin.push({y:temp_min,x:date})
          arrayHumidity.push({y:umity,x:date})
          return(
            <div>
            <p>{selectedCity.name}</p>
            {/* <p>Sensação termina: {i.main.feels_like}</p>
            <p>Umidade: {i.main.humidity}%</p>
            <p>Temperatura atual: {i.main.temp}</p>
            <p>Temperatura maxima: {i.main.temp_max}</p>
            <p>Temperatura minima: {i.main.temp_min}</p>
            <p>Dia está: {i.weather[0].description}</p>
            <p>Velocidade do vento: {i.wind.speed} km/h</p>
            <p>Data: {i.dt_txt}</p> */}
            </div>
        )
        })}
<VictoryChart
  width={1000}
  height={400}
>
  <VictoryLine
    style={{
      data: { stroke: "#fff" },
      parent: { border: "2px solid #fff",  fill:'#fff'},
      labels: { color:'#fff',  fill:'#fff'}
    }}
    data={arrayTemp}
  />
</VictoryChart>
<VictoryChart
  width={1000}
  height={400}
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
  );
}

export default CityWeather;
