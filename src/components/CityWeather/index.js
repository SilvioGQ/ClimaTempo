import React, { useEffect, useState } from "react";
import { getAll } from "../../Api";
import Button from "../Button";

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
  return (
    <div>
        {locationWeather && locationWeather.list.map(i=>{
          return(
            <div>
            <p>{selectedCity.name}</p>
            <p>Sensação termina: {i.main.feels_like}</p>
            <p>Umidade: {i.main.humidity}%</p>
            <p>Temperatura atual: {i.main.temp}</p>
            <p>Temperatura maxima: {i.main.temp_max}</p>
            <p>Temperatura minima: {i.main.temp_min}</p>
            <p>Dia está: {i.weather[0].description}</p>
            <p>Velocidade do vento: {i.wind.speed} km/h</p>
            <p>Data: {i.dt_txt}</p>
            </div>
        )
        })}
    </div>
  );
}

export default CityWeather;
