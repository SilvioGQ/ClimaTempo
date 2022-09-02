import React, { useEffect, useState } from "react";
import { getByName } from "../../Api";
import Button from "../Button";

function CitiesOptions({ inputValue, setSelectedCity, setPlace }) {
  const [locationWeather, setLocationWeather] = useState();
  const get = async () => {
    let res = await getByName(inputValue);
    console.log(res);
    setLocationWeather(res);
    return res;
  };
  useEffect(() => {
    get();
  }, []);
  return (
    <div>
      {locationWeather &&
        locationWeather.map((i) => {
          return (
            <div>
            <button onClick={()=>{setPlace(false); setSelectedCity({name:i.name, country:i.country, lat:i.lat, lon:i.lon, state: i.state})}}>
              {i.name},{i.state},{i.country}
            </button>
            <br/>
            </div>
          );
        })}
    </div>
  );
}

export default CitiesOptions;
