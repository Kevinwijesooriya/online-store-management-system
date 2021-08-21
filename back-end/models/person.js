const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  personSchema = new Schema({
  Name: {
    type: String,
    required: true
  } ,
  ID: {
    type: String,
    required: true
  } ,
  Age: {
    type: Number,
    required: true
  } 

});

module.exports = person  = mongoose.model("person",  personSchema);