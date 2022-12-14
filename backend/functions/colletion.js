const { MongoClient } = require("mongodb");

// Connection URL
const url =
  "mongodb+srv://silvioquintana:tznfSfKg2MBZ1svb@cluster0.nehsryb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

// Database Name
const dbName = "MongoAPI";

const CitiesCollection = async () => {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("Cities");
  return collection;
};

module.exports = {
  CitiesCollection,
};
