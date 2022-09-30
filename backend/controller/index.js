import { CitiesCollection } from "./colletion"

export const createCity = async (city) => {
    try{
        const collection = await CitiesCollection();
        await collection.insertOne(city);
        return res.status(201).json({msg:'Cadastrado com sucesso'})
    } catch (err) {
        return res.status(400).json({msg:err})
    }
}
export const getCity = async (id) => {
    try{
        const collection = await CitiesCollection();
        const result = await collection.findOne({city_id: id});
        return res.status(201).json(result)
    } catch (err) {
        return res.status(400).json({msg:err})
    }
}
export const getAllCities = async(id) => {
    try{
        const collection = await CitiesCollection();
        const result = collection.find({});
        return res.status(201).json(result)
    } catch (err) {
        return res.status(400).json({msg:err})
    }
}