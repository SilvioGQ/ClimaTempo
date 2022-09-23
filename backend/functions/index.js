import { CitiesCollection, WeatherCollection } from "./colletion"

export const createCity = async(city) => {
    const collection = await CitiesCollection();
    try{
        const result = await collection.insertOne(city);
        return console.log('adicionado')
    } catch (err) {
        return console.log(err)
    }
}
export const createWeather = async(list) => {
    const collection = await WeatherCollection();
    try{
        const result = await collection.insertOne(list);
        return console.log('adicionado')
    } catch (err) {
        return console.log(err)
    }
}
export const getCity = async(id) => {
    const collection = await CitiesCollection();
    try{
        const result = await collection.findOne(id);
        return console.log(result)
    } catch (err) {
        return console.log(err)
    }
}