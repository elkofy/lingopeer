
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:<password>@database.wdiqg.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
console.log("DATABASE CREATED");
  client.close();
});
