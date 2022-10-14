const { CitiesCollection } = require("./colletion");

const createCity = async (req, res) => {
  try {
    console.log(req.body);
    const collection = await CitiesCollection();
    let teste = await collection.insertOne(req.body);
    console.log(teste);
    return res.status(201).json({ msg: "Cadastrado com sucesso" });
  } catch (err) {
    return res.status(400).json({ msg: err });
  }
};
const getCity = async (req, res) => {
  try {
    const { id } = req.params;
    const collection = await CitiesCollection();
    var ObjectId = require('mongodb').ObjectId; 
    var o_id = new ObjectId(id);
    const result = await collection.findOne({ _id: o_id });
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({ msg: err });
  }
};
const getAllCities = async (req, res) => {
  try {
    const collection = await CitiesCollection();
    const result = await collection.find({}).toArray();
    console.log(result);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({ msg: err });
  }
};

module.exports = {
  createCity,
  getCity,
  getAllCities,
};
