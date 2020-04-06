function transformationGenerator(microserviceMapping) {
    var transform = ``
    microserviceMapping.parameters.forEach(parameter => {
        transform += `function ${microserviceMapping.mappings[parameter].function.name}${microserviceMapping.mappings[parameter].function.code}
        
`        
    });

    transform += `function transform(request_json) {
`
    microserviceMapping.parameters.forEach(parameter => {
        transform += `    var ${parameter} = ${microserviceMapping.mappings[parameter].function.name}(`
        microserviceMapping.mappings[parameter].function.arguments.forEach((arg, index, arr) => {
            transform += `request_json.${arg}`
            if(index !== arr.length-1) {
                transform += `, `
            }
        })
        transform += `)
`
    })

    transform += `
    var response_json = {
`

    microserviceMapping.parameters.forEach(parameter => {
        transform += `        ${parameter}: ${parameter},
`
    })
    
    transform += `    }

    return response_json;
}
    
module.exports = {transform}
`  

    return transform
}

module.exports = transformationGenerator
