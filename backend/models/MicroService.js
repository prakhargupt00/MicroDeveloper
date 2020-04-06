const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;

// Creates Schema with required attributes and data types
var MicroserviceSchema = new Schema({
    title: { type: String, required: true, unique: true },
    keywords: [{ type: String }],
    developer: { type: String, required: false },  
    documentation: { type: String },
    code_snippet: { type: String },    //We will think about this later
    tech_stack: [{ type: String }],
    params: [{ type: String}]          
  });
  
//MicroService object  will be used for exporting MicroserviceSchema, see the end of this file.
var Microservice = mongoose.model("Microservice", MicroserviceSchema);
 
module.exports = Microservice;