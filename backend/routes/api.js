const express = require("express");

const router = express.Router();

var Microservice = require("../models/MicroService.js");
var Requestmicro = require("../models/RequestMicroservice.js");


//Routes
router.get("/micr", (req, res) => {
  Microservice.find({}, (err, All_micro_serv) => {
    if (err) {
      console.log("Retreival Error:" + err);
    } else {
      console.log("All objects sent sucessfully!!!");
      res.send({ micros: All_micro_serv});
    }
  });
});

router.get("/micrB", (req, res) => {
  Requestmicro.find({}, (err, All_micro_serv) => {
    if (err) {
      console.log("Retreival Error:" + err);
    } else {
      console.log("All objects sent sucessfully!!!");
      res.send({ micros: All_micro_serv});
    }
  });
});

router.post("/retr_one", (req, res) => {
  let micro_id = req.body.micro_id;
  Microservice.findById(micro_id, (err, one_micro) => {
    if (err) {
      console.log("Oops Error:" + err);
      res.send({status:false,error:err})
    } else {
      // console.log(one_micro);
      res.send({status:true,micro:one_micro});
    }
  });
});

router.post("/retr_oneB", (req, res) => {
  let micro_id = req.body.micro_id;
  Requestmicro.findById(micro_id, (err, one_micro) => {
    if (err) {
      console.log("Oops Error:" + err);
      res.send({status:false,error:err})
    } else {
      // console.log(one_micro);
      res.send({status:true,micro:one_micro});
    }
  });
});

router.get("/find_params", (req, res) => {
  let micro_id = req.body.micro_id;
  Microservice.findById(micro_id, (err, one_micro) => {
    if (err) {
      console.log("Oops Error:" + err);
      res.send({status:false,error:err})
    } else {
      // console.log(one_micro);
      res.send({status:true,params:one_micro.params});
    }
  });
});


router.get("/test", (req, res) => {
  res.json({"message":"Its working"});
});

router.get("/create", (req,res) => {
  // Microservice.create(
  //   {title:"Flight Booking",
  //   keywords:["Flights","Tickets","Fast","Cheap","Travel"],
  //   developer:"Tyler",
  //   documentation:"C/docs/travel/flight",
  //   tech_stack:["MongoDB","nodeJS","javascript","React"],
  //   code_snippet:"Not known",params:["param1","param2"]},
  // (err,obj) =>{
  //   console.log(obj);
  // }) 
  // res.send("Microservice created")
});

router.get("/createB", (req,res) => {
  // Requestmicro.create(
  //   {title:"Text Analyser",
  //   params:["paramB1","paramB2"]},
  // (err,obj) =>{
  //   console.log(obj);
  // }) 
  // res.send("Microservice created")
});

module.exports = router;
