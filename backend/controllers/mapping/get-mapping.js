getMapping = async (req, res) => {
    if(req.body.existing === 'A' && req.body.requested === 'B') {
      var  microserviceMapping = {
        'parameters': ['A', 'B', 'C', 'D', 'E'],
        'mappings': {
          'A': {'param': 'A', 'type': null, 'subType': null, 'function': {'name': null,'arguments': [], 'code': ''}},
          'B': {'param': 'B', 'type': null, 'subType': null, 'function': {'name': null,'arguments': [], 'code': ''}},
          'C': {'param': 'C', 'type': null, 'subType': null, 'function': {'name': null,'arguments': [], 'code': ''}},
          'D': {'param': 'D', 'type': null, 'subType': null, 'function': {'name': null,'arguments': [], 'code': ''}},
          'E': {'param': 'E', 'type': null, 'subType': null, 'function': {'name': null,'arguments': [], 'code': ''}}
        }
      }
      res.json({microserviceMapping})
    } else {
      res.json('well we are working on this feature!!!')
    }
}

module.exports = getMapping
