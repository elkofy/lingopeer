const mongoose = require("mongoose");

const Choice = mongoose.model(
  "Choice",
  new mongoose.Schema({
    username: String,
    langue: String,
    theme:String,
  })
);

module.exports = Role;
