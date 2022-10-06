import axios from "axios";

const baseURL = "http://api.openweathermap.org/geo/1.0";

const baseURLocal = "http://localhost:8080";
// mongo senha OwKzE9OzngkcIVPm
export async function getAll(lat, lon) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f404a5ed8e3a5932e8df1193efaa7a35&units=metric&lang=pt_br`
    );
    return response.data;
  } catch (err) {
    console.error("ops! ocorreu um erro" + err);
  }
}

export async function getToCharts(lat, lon, count) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${count}&appid=f404a5ed8e3a5932e8df1193efaa7a35&units=metric&lang=pt_br`
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
export async function saveCity(data) {
  try {
    const response = await axios.post(`${baseURLocal}/clima`, {
      ...data,
    });
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function getAllHistory() {
  try {
    const response = await axios.get(`${baseURLocal}/clima`);
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function getCityHistory(id) {
  try {
    const response = await axios.get(`${baseURLocal}/clima/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
}
