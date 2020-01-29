// Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
// const cors = require("cors"); no need as proxy added to the package.json of client

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require("./routes/api");

const MONGODB_URI = "mongodb+srv://prakhar:prakhar@login-page-bqjzb.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI || "process.env.MONGODB_URI", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//to check if mongoose is connected
mongoose.connection.on("connected", () => {
  console.log("Mongooose is connected!!");
});

app.use(express.json());
app.use(express.urlencoded({extended: false})) ;  //these 2 lines make req.body from undefined to defined by parsing json 

//HTTP request logger
app.use(morgan("tiny"));  
app.use("/api", routes);

app.listen(PORT, console.log(`Server is starting at port: ${PORT}`));
