const { CitiesCollection, WeatherCollection } = require("./colletion")

 const createCity = async(city) => {
     try{
        const collection = await CitiesCollection();
        const result = await collection.insertOne(city);
        return console.log('adicionado')
    } catch (err) {
        return console.log(err)
    }
}
  const createWeather = async(list) => {
      try{
        const collection = await WeatherCollection();
        const result = await collection.insertOne(list);
        return console.log('adicionado')
    } catch (err) {
        return console.log(err)
    }
}
 const getCity = async(id) => {
     try{
        const collection = await CitiesCollection();
        const result = await collection.findOne(id);
        return console.log(result)
    } catch (err) {
        return console.log(err)
    }
}

module.exports = {
    createCity,
    createWeather,
    getCity
}