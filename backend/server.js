// Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require("path");
const cors = require("cors"); 
const UserModel = require('./models/User');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require("./routes/api");
const secureRoute = require('./routes/secure-route');
const microserviceRouter = require('./routes/microservice');
const mappingRouter = require('./routes/mapping');
const internalroutes = require("./routes/routes") ;

const MONGODB_URI = "mongodb+srv://prakhar:prakhar@login-page-bqjzb.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI || "process.env.MONGODB_URI", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// mongo_db = "mongodb+srv://microservice-framework:Gc38w7Kb2KQxt9L@microcluster-faujq.mongodb.net/test?retryWrites=true&w=majority"
// mongoose.connect(mongo_db, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;

require('./auth/auth');

//to check if mongoose is connected
mongoose.connection.on("connected", () => {
  console.log("Mongooose is connected!!");
});

app.use(cors()) ; 
app.use(express.json());
app.use(express.urlencoded({extended: false})) ;  //these 2 lines make req.body from undefined to defined by parsing json 
app.use( bodyParser.urlencoded({ extended : false }) );

//HTTP request logger
app.use(morgan("tiny"));  
app.use("/api", routes);

app.use('/mapping', mappingRouter)
app.use('/', internalroutes);
app.use('/microservice', microserviceRouter)
app.use('/user', passport.authenticate('jwt', { session : false }), secureRoute );

app.listen(PORT, console.log(`Server is starting at port: ${PORT}`));
