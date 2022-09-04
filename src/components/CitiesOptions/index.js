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
            <button style={{ fontSize:16, backgroundColor:'rgb(35,70,138,73)', color:'white', width:510, marginTop:14, height:50, border:'none', borderRadius:5, cursor:'pointer' }} onClick={()=>{ setSelectedCity({name:i.name, country:i.country, lat:i.lat, lon:i.lon, state: i.state})}}>
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
