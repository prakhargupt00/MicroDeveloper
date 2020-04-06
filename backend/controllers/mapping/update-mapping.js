const transformationGenerator = require('./transformation-generator')
const microservices_builder = require('../../../mapping-code-generator/microservices-builder')

updateMapping = async (req, res) => {
    var transform = transformationGenerator(req.body.microserviceMapping)
    microservices_builder.build_server(req.body.requestedMicroserviceName, transform)
    res.send('Microservice has been updated!!')
    // microservices_builder.start_server(req.body.requestedMicroserviceName)
}

module.exports = updateMapping
