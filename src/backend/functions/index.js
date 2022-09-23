import { Collection } from "../db"

export const create = async(array) => {
    const collection = await Collection();
    try{
        const result = await collection.insertMany(array);
        return console.log('adicionado')
    } catch (err) {
        return console.log(err)
    }

}