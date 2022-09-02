import axios from "axios";

const baseURL = "http://api.openweathermap.org/geo/1.0";

export async function getAll(lat, lon) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=7&appid=f404a5ed8e3a5932e8df1193efaa7a35&units=metric&lang=pt_br`
    );
    return response.data;
  } catch (err) {
    console.error("ops! ocorreu um erro" + err);
  }
}

export async function getByName(inputValue) {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=10&appid=f404a5ed8e3a5932e8df1193efaa7a35`
    );
    return response.data;
  } catch (err) {
    console.error("ops! ocorreu um erro" + err);
  }
}

export async function getAllDays(lat, lon) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=f404a5ed8e3a5932e8df1193efaa7a35&units=metric&lang=pt_br`
      );
      return response.data;
    } catch (err) {
      console.error("ops! ocorreu um erro" + err);
    }
  }


