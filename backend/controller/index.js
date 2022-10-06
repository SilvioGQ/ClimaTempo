const { CitiesCollection } = require("./colletion");

const createCity = async (req, res) => {
  try {
    console.log(req.body)
    const collection = await CitiesCollection();
    let teste = await collection.insertOne(req.body);
    console.log(teste)
    return res.status(201).json({ msg: "Cadastrado com sucesso" });
  } catch (err) {
    return res.status(400).json({ msg: err });
  }
};
const getCity = async (req, res) => {
  try {
    const {id} = req.params
    const collection = await CitiesCollection();
    const result = await collection.findOne({ city_id: id });
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({ msg: err });
  }
};
const getAllCities = async (req, res) => {
  try {
    const collection = await CitiesCollection();
    const result = collection.find({});
    console.log(result)
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({ msg: err });
  }
};

module.exports = {
    createCity,
    getCity,
    getAllCities
}