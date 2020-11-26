var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
const uri = "mongodb+srv://root:<password>@database.wdiqg.mongodb.net/<dbname>?retryWrites=true&w=majority";
module.exports = {
    signup: function(name, email, password){
        MongoClient.connect(url, function(err, db) {
            console.log('connected');
        });
    }
}