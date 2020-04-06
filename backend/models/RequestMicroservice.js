const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;

// Creates Schema with required attributes and data types
var RequestMicroserviceSchema = new Schema({
    title: { type: String, required: true, unique: true },
    params: [{ type: String}]          
  });
  
//MicroService object  will be used for exporting MicroserviceSchema, see the end of this file.
var Requestmicro = mongoose.model("Requestmicro", RequestMicroserviceSchema);
 
module.exports = Requestmicro;