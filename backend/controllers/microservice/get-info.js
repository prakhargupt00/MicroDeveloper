getInfo = async (req, res, next) => {
    if(req.body.microservice === 'B') {
      var requestedMicroservice = {
        'parameters' : ['B1', 'B2', 'B3', 'B4', 'none'],
        'parameterAttributes' : {
          'B1': {'name': 'B1', 'type': 'int'},
          'B2': {'name': 'B2', 'type': 'string'},
          'B3': {'name': 'B3', 'type': 'float'},
          'B4': {'name': 'B4', 'type': 'int'},
        }
      }
      res.json({requestedMicroservice})
    } else {
      res.json("Microservice not found!!!")
    }
}

module.exports = getInfo
